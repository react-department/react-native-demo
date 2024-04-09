import React from 'react';
import {
  ActivityIndicator, RefreshControl, StyleSheet, View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Tabs } from 'react-native-collapsible-tab-view';
import { useTheme } from '@react-navigation/native';

import EmptyList from '../../components/EmptyList/EmptyList';
import TabBar from '../../components/TabBar/TabBar';
import Layout from '../../layout/Layout';
import PostItem from './components/PostItem';
import Separator from './components/Separator';

import type TTheme from '../../theme/interfaces/TTheme';
import type IPosts from './interfaces/IPosts';

import InfoErrorIcon from '../../assets/images/svg/infoError.svg';

function PostsView({
  posts,
  isLoading,
  isFetching,
  isLastPage,
  readMorePosts,
  onRefresh,
}: IPosts) {
  const { colors } = useTheme() as TTheme;
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    layout: {
      backgroundColor: colors.backgroundGhost,
      paddingHorizontal: 0,
      position: 'relative',
    },
    listContainer: {
      paddingTop: 12,
      paddingBottom: 36,
      paddingHorizontal: 16,
      flexGrow: 1,
    },
    indicator: {
      marginVertical: 8,
    },
    loader: {
      flex: 1,
    },
    textEmptyList: {
      marginTop: 12,
      color: colors.fontPrimary,
    },
    tabsHeader: {
      shadowOpacity: 0,
      borderBottomColor: colors.grey,
      borderBottomWidth: 1,
    },
  });

  return (
    <Layout style={styles.layout}>
      {isLoading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <Tabs.Container
          headerContainerStyle={styles.tabsHeader}
          renderTabBar={(props) => (
            <View pointerEvents="box-none">
              <TabBar
                tabContainerStyle={{ backgroundColor: colors.backgroundGhost }}
                {...props}
              />
            </View>
          )}
        >
          <Tabs.Tab name="posts" label={`${t('posts')}`}>
            <Tabs.FlatList
              data={posts}
              renderItem={({ item }) => (
                <PostItem post={item} />
              )}
              onEndReached={readMorePosts}
              onEndReachedThreshold={0.02}
              scrollEventThrottle={250}
              ItemSeparatorComponent={Separator}
              contentContainerStyle={styles.listContainer}
              ListEmptyComponent={(
                <EmptyList
                  icon={<InfoErrorIcon color={colors.iconSecondary} />}
                  text={t('noPosts')}
                  styleText={styles.textEmptyList}
                />
              )}
              keyExtractor={({ id }) => `post_${id}`}
              ListFooterComponent={!isLastPage && isFetching && !isLoading
                ? <ActivityIndicator style={styles.indicator} />
                : null}
              refreshControl={(
                <RefreshControl
                  refreshing={isFetching}
                  onRefresh={onRefresh}
                />
              )}
            />
          </Tabs.Tab>
          <Tabs.Tab name="live" label={`${t('live')}`}>
            <Tabs.FlatList
              data={[]}
              renderItem={({ item }) => (
                <PostItem post={item} />
              )}
              onEndReachedThreshold={0.02}
              scrollEventThrottle={250}
              ItemSeparatorComponent={Separator}
              contentContainerStyle={styles.listContainer}
              ListEmptyComponent={(
                <EmptyList
                  icon={<InfoErrorIcon color={colors.iconSecondary} />}
                  text={t('noLivePosts')}
                  styleText={styles.textEmptyList}
                />
              )}
              keyExtractor={({ id }) => `live_${id}`}
              refreshControl={(
                <RefreshControl
                  refreshing={isFetching}
                  onRefresh={onRefresh}
                />
              )}
            />
          </Tabs.Tab>
        </Tabs.Container>
      )}
    </Layout>
  );
}

export default PostsView;
