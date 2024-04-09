import { useEffect } from 'react';
import { getUniqueId } from 'react-native-device-info';

const useUniqueId = () => {
  useEffect(() => {
    const getUniqueDeviceId = async () => {
      return getUniqueId();
    };

    getUniqueDeviceId();
  }, []);
};

export default useUniqueId;
