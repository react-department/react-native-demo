import type { ImageSourcePropType } from 'react-native';

export interface IAccessContentItem {
  id: string
  name: string
  title: string
  description: string
  instruction: string
  imageSrc: ImageSourcePropType
}
