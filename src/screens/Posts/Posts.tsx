import React, { useState } from 'react';

import { useGetPostsQuery } from '../../store/slices/posts/apis/authGame7Api';
import PostsView from './PostsView';

function Posts() {
  const [postsPage, setPostsPage] = useState(1);
  const {
    data: posts,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
    refetch: refetchUpcomingGames,
  } = useGetPostsQuery({
    page: postsPage,
    perPage: 10,
  });

  const isFetching = isPostsFetching;
  const isLoading = isPostsLoading;

  const handleReadMorePosts = () => {
    if (posts?.data.length
      && posts?.meta.currentPage
      && !posts?.meta?.isLastPage
    ) {
      setPostsPage(posts.meta.currentPage + 1);
    }
  };

  const handleRefresh = () => {
    if (postsPage === 1) {
      refetchUpcomingGames();
    } else {
      setPostsPage(1);
    }
  };

  return (
    <PostsView
      posts={posts?.data}
      isLoading={isLoading}
      isFetching={isFetching}
      isLastPage={false}
      readMorePosts={handleReadMorePosts}
      onRefresh={handleRefresh}
    />
  );
}

export default Posts;
