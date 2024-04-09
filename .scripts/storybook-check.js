#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const directionList = [
  {
    type: 'components',
    storiesDir: './.storybook/stories/components',
    componentsDir: './src/components',
  },
  {
    type: 'icons',
    storiesDir: './.storybook/stories/icons',
    componentsDir: './src/assets/images/svg',
  },
]
const IMPORT_NAMES_REGEX = /import\s+[^']+from\s+'([^']+)';/g

async function getAllFiles(directionPath) {
  const filesInDirection = await fs.promises.readdir(directionPath);

  const svgFiles = await Promise.all(filesInDirection.map(async file => {
    const filePath = path.join(directionPath, file);
    const filesStats = await fs.promises.stat(filePath);

    if (filesStats.isDirectory()) {
      return getAllFiles(filePath);
    } else if (filesStats.isFile() && file.endsWith('.svg')) {
      return file;
    }

    return null;
  }));

  return svgFiles.flat()
}
function compare(components, stories, type) {
  const componentsWithoutStories = [];
  const storiesLowerCase = stories.map(story => story.toLowerCase());

  components.forEach(component => {
    const componentName = type === 'components' ? `${component.toLowerCase()}.stories.tsx` : component.toLowerCase();
    if (!storiesLowerCase.includes(componentName)) {
      componentsWithoutStories.push(component);
    }
  });
  return componentsWithoutStories;
}

async function checkStories() {
  const sourceSVGDir = './src/assets/images/svg';

  const processedPromises = directionList.map(async ({ componentsDir }) => {
    if (componentsDir.includes('/svg')) {
      return await getAllFiles(sourceSVGDir);
    } else {
      return await fs.promises.readdir(componentsDir);
    }
  });
  const results = await Promise.all(processedPromises);

  const iconsStoriesPath = {
    icons: '.storybook/stories/icons/icons.stories.tsx',
    social: '.storybook/stories/icons/social.stories.tsx',
  };

  const importPaths = {};
  Object.keys(iconsStoriesPath).forEach(type => {
    const storiesContent = fs.readFileSync(iconsStoriesPath[type], 'utf-8');
    importPaths[type] = [];
    let match;

    while ((match = IMPORT_NAMES_REGEX.exec(storiesContent)) !== null) {
      const iconName = match[1].trim();

      if (iconName) {
        importPaths[type].push(iconName);
      }
    }
  });

  const filterImportPaths = (importPaths) => {
    const filenames = Object.values(importPaths).flat();

    return filenames
      .filter(filename => filename.includes('/svg/'))
      .map(filename => filename.split('/')
        .pop());
  };

  let existNewComponents = false;

  directionList.forEach(({ storiesDir, componentsDir, type }, index) => {
    const stories = type === 'icons' ?  filterImportPaths(importPaths) : fs.readdirSync(storiesDir);
    const components = results[index];
    const newComponents = compare(components, stories, type);

    if (newComponents.length > 0) {
      existNewComponents = true;
      console.warn('\x1b[31m', `Add stories for this ${type}:`);
      console.log("\x1b[0m", newComponents);
    }
  });

  if (existNewComponents) {
    process.exit(1)
  }
  process.exit(0)
}

checkStories()
