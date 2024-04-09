declare module '*.svg' {
  const svgContent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default svgContent;
}

declare module '*.png' {
  import type { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  import type { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}

declare module '*.mp4' {
  const value: number;
  export default value;
}

declare module '*.gif' {
  const gifContent: string;
  export default gifContent;
}
