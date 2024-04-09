import React from 'react';
import { View } from 'react-native';

import CustomText from '../../../components/CustomText/CustomText';
import Title from '../../../components/Title/Title';

import type IPostsItem from '../interfaces/IPostsItem';

function PostItem({ post }: IPostsItem) {
  return (
    <View>
      <Title title={post.title} />
      <CustomText>
        {post.body}
      </CustomText>
    </View>
  );
}

export default PostItem;
