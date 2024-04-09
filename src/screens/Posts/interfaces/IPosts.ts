import type { TPost } from '../../../store/slices/posts/interfaces/TPost';

export default interface IPosts {
  posts?: TPost[];
  isFetching: boolean;
  isLoading: boolean;
  isLastPage: boolean;
  readMorePosts: () => void;
  onRefresh: () => void;
}
