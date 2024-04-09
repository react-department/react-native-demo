import { useWindowDimensions } from 'react-native';

const SMALL_SCREEN = 330;

const useIsSmallScreen = () => {
  const { width } = useWindowDimensions();

  return width < SMALL_SCREEN;
};

export default useIsSmallScreen;
