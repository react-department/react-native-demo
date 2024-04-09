import type {
  IPaginationData,
  IPaginationForceRefetch,
  IPaginationSerializeQueryArgs,
} from './interfaces/IStoreHelpers';

// export const paginationMerge = <T>(currentData: T[], newData: T[], queryArgs: { arg: IQueryArgs }) => {
//   const mergedData = currentData;
//   // clear old cache if we are on the first page
//   if (queryArgs.arg.page === 2) {
//     return newData;
//   }
//   mergedData.push(...newData);
//   return mergedData;
// };

export const paginationMerge = <T>(currentData: IPaginationData<T>, newData: IPaginationData<T>) => {
  const mergedData = currentData;
  // clear old cache if we are on the first page
  if (newData?.meta?.currentPage === 1) {
    return newData;
  }
  mergedData.data.push(...newData.data);
  mergedData.meta = {
    ...mergedData.meta,
    ...newData.meta,
  };
  return mergedData;
};

export const paginationSerializeQueryArgs = ({ endpointName, queryArgs }: IPaginationSerializeQueryArgs) => {
  const { page, ...other } = queryArgs;
  return `${endpointName}(${JSON.stringify(other)})`;
};

export const paginationForceRefetch = ({ currentArg, previousArg }: IPaginationForceRefetch) => {
  return currentArg?.page !== previousArg?.page;
};
