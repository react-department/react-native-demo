import { useNavigation } from '@react-navigation/native';

import type { TStackNavigation } from '../types/TRootStackParamList';

const useAppNavigation = () => useNavigation<TStackNavigation>();

export default useAppNavigation;
