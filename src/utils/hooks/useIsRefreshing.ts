import { useEffect, useState } from 'react';

const useIsRefreshing = (isFetching: boolean): [boolean, () => void] => {
  const [isRefreshing, setIsRefresh] = useState<boolean>(false);

  const startRefresh = () => {
    setIsRefresh(true);
  };

  useEffect(() => {
    if (isRefreshing && !isFetching) {
      setIsRefresh(false);
    }
  }, [isFetching]);

  return [isRefreshing, startRefresh];
};

export default useIsRefreshing;
