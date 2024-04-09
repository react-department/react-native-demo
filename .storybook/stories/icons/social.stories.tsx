import React from 'react';
import {
  ScrollView, StyleSheet, View,
} from 'react-native';

import IconItem from '../../../src/components/IconItem/IconItem';

import FacebookIcon from '../../../src/assets/images/svg/social/facebook.svg';
import HudlIcon from '../../../src/assets/images/svg/social/hudl.svg';
import InstagramIcon from '../../../src/assets/images/svg/social/instagram.svg';
import LinkedinIcon from '../../../src/assets/images/svg/social/linkedin.svg';
import TiktokIcon from '../../../src/assets/images/svg/social/tiktok.svg';
import XIcon from '../../../src/assets/images/svg/social/x.svg';
import YouTubeIcon from '../../../src/assets/images/svg/social/youtube.svg';

function SocialStories() {
  const style = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    rows: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  });

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.rows}>
        <IconItem Icon={FacebookIcon} name="facebook" />
        <IconItem Icon={HudlIcon} name="udl" />
        <IconItem Icon={InstagramIcon} name="instagram" />
        <IconItem Icon={LinkedinIcon} name="linkedin" />
        <IconItem Icon={TiktokIcon} name="tiktok" />
        <IconItem Icon={XIcon} name="twitter" />
        <IconItem Icon={YouTubeIcon} name="youtube" />
      </View>
    </ScrollView>
  );
}

export default SocialStories;
