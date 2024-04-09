import type { TInitialRouteName } from '../../store/slices/general/interfaces/TInitialRouteName';
import type TNavigationParams from './TNavigationParams';

type TNavigationRoute = {
  name: TInitialRouteName
  params?: TNavigationParams
};

export default TNavigationRoute;
