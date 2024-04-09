import React from 'react';
import {
  ScrollView, StyleSheet, View,
} from 'react-native';

import IconItem from '../../../src/components/IconItem/IconItem';

import AccessPoint from '../../../src/assets/images/svg/accessPoint.svg';
import AccountIcon from '../../../src/assets/images/svg/account.svg';
import AddContactIcon from '../../../src/assets/images/svg/addContact.svg';
import AddNoteIcon from '../../../src/assets/images/svg/addNote.svg';
import AddOthersIcon from '../../../src/assets/images/svg/addOthers.svg';
import AddUserIcon from '../../../src/assets/images/svg/addUser.svg';
import AlertOctagonIcon from '../../../src/assets/images/svg/alertOctagon.svg';
import ArrowLeftIcon from '../../../src/assets/images/svg/arrowLeft.svg';
import ArrowLeftCircleIcon from '../../../src/assets/images/svg/arrowLeftCircle.svg';
import AvatarUnknownIcon from '../../../src/assets/images/svg/avatarUnknown.svg';
import BurgerIcon from '../../../src/assets/images/svg/burger.svg';
import BurgerCircleIcon from '../../../src/assets/images/svg/burgerCircle.svg';
import CalendarIcon from '../../../src/assets/images/svg/calendar.svg';
import Calendar2Icon from '../../../src/assets/images/svg/calendar2.svg';
import CalendarComingSoonIcon from '../../../src/assets/images/svg/calendarComingSoon.svg';
import CheckMarkIcon from '../../../src/assets/images/svg/checkMark.svg';
import CheckMarkFilledIcon from '../../../src/assets/images/svg/checkMarkFilled.svg';
import ChevronBottomIcon from '../../../src/assets/images/svg/chevronBottom.svg';
import ChevronRightIcon from '../../../src/assets/images/svg/chevronRight.svg';
import ClockIcon from '../../../src/assets/images/svg/clock.svg';
import CloseIcon from '../../../src/assets/images/svg/close.svg';
import CloseWithCircleIcon from '../../../src/assets/images/svg/closeWithCircle.svg';
import ContactIcon from '../../../src/assets/images/svg/contact.svg';
import CopyIcon from '../../../src/assets/images/svg/copy.svg';
import CrossFilledIcon from '../../../src/assets/images/svg/crossFilled.svg';
import CrossStatusIcon from '../../../src/assets/images/svg/crossStatus.svg';
import DotsIcon from '../../../src/assets/images/svg/dots.svg';
import DotsCircleIcon from '../../../src/assets/images/svg/dotsCircle.svg';
import DownloadIcon from '../../../src/assets/images/svg/download.svg';
import DownNumberActiveIcon from '../../../src/assets/images/svg/downNumberActive.svg';
import EmailRectAngleIcon from '../../../src/assets/images/svg/emailRectangle.svg';
import EmptyInvitesIcon from '../../../src/assets/images/svg/emptyInvites.svg';
import ExclamationMarkIcon from '../../../src/assets/images/svg/exclamationMark.svg';
import ExclamationMarkCircleIcon from '../../../src/assets/images/svg/exclamationMarkCircle.svg';
import ExpandIcon from '../../../src/assets/images/svg/expand.svg';
import EyeClosedIcon from '../../../src/assets/images/svg/eyeClosed.svg';
import EyeOpenIcon from '../../../src/assets/images/svg/eyeOpen.svg';
import HomeIcon from '../../../src/assets/images/svg/home.svg';
import InboxIcon from '../../../src/assets/images/svg/inbox.svg';
import InfoIcon from '../../../src/assets/images/svg/info.svg';
import InfoDarkIcon from '../../../src/assets/images/svg/infoDark.svg';
import InfoErrorIcon from '../../../src/assets/images/svg/infoError.svg';
import ListIcon from '../../../src/assets/images/svg/list.svg';
import LocationIcon from '../../../src/assets/images/svg/locationIcon.svg';
import LogOutIcon from '../../../src/assets/images/svg/logOut.svg';
import MarkIcon from '../../../src/assets/images/svg/mark.svg';
import MinusIcon from '../../../src/assets/images/svg/minus.svg';
import MobileIcon from '../../../src/assets/images/svg/mobile.svg';
import NoteIcon from '../../../src/assets/images/svg/note.svg';
import NotificationBingIcon from '../../../src/assets/images/svg/notificationBing.svg';
import OverStatusIcon from '../../../src/assets/images/svg/overStatus.svg';
import PauseIcon from '../../../src/assets/images/svg/pause.svg';
import PenIcon from '../../../src/assets/images/svg/pen.svg';
import PencilIcon from '../../../src/assets/images/svg/pencil.svg';
import PlayIcon from '../../../src/assets/images/svg/play.svg';
import PlusIcon from '../../../src/assets/images/svg/plus.svg';
import PointIcon from '../../../src/assets/images/svg/point.svg';
import PostsIcon from '../../../src/assets/images/svg/posts.svg';
import PrivacyPolicyIcon from '../../../src/assets/images/svg/privacyPolicy.svg';
import QRCodeIcon from '../../../src/assets/images/svg/qrCode.svg';
import ReadyStatusIcon from '../../../src/assets/images/svg/readyStatus.svg';
import ResendIcon from '../../../src/assets/images/svg/resendIcon.svg';
import ScheduleIcon from '../../../src/assets/images/svg/schedule.svg';
import SearchIcon from '../../../src/assets/images/svg/search.svg';
import SearchFindIcon from '../../../src/assets/images/svg/searchFind.svg';
import SettingIcon from '../../../src/assets/images/svg/settings.svg';
import SettingsIcon from '../../../src/assets/images/svg/settingsIcon.svg';
import SignDocIcon from '../../../src/assets/images/svg/signDoc.svg';
import SortDownIcon from '../../../src/assets/images/svg/sortDown.svg';
import TermsIcon from '../../../src/assets/images/svg/terms.svg';
import TimeIcon from '../../../src/assets/images/svg/time.svg';
import TimerIcon from '../../../src/assets/images/svg/timerIcon.svg';
import UploadIcon from '../../../src/assets/images/svg/upload.svg';
import UrnIcon from '../../../src/assets/images/svg/urn.svg';
import UseLocationIcon from '../../../src/assets/images/svg/useLocation.svg';
import UseLocationSecondIcon from '../../../src/assets/images/svg/useLocationSecond.svg';
import UserDarkIcon from '../../../src/assets/images/svg/userDark.svg';
import UserPlusIcon from '../../../src/assets/images/svg/userPlus.svg';
import UserPlusBackgroundIcon from '../../../src/assets/images/svg/userPlusBackground.svg';
import WarningIcon from '../../../src/assets/images/svg/warning.svg';
import WarningBoldTriangleIcon from '../../../src/assets/images/svg/warningBoldTriangle.svg';
import WarningTriangleIcon from '../../../src/assets/images/svg/warningTriangle.svg';
import WifiOffIcon from '../../../src/assets/images/svg/wifiOff.svg';
import YouTubeIcon from '../../../src/assets/images/svg/youtube.svg';

function IconsStories() {
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
        <IconItem Icon={AccountIcon} name="account" />
        <IconItem Icon={AddContactIcon} name="addContact" />
        <IconItem Icon={AddNoteIcon} name="addNote" />
        <IconItem Icon={AddOthersIcon} name="addOthers" />
        <IconItem Icon={AddUserIcon} name="addUser" />
        <IconItem Icon={AlertOctagonIcon} name="alertOctagon" />
        <IconItem Icon={ArrowLeftIcon} name="arrowLeft" />
        <IconItem Icon={ArrowLeftCircleIcon} name="arrowLeftCircle" />
        <IconItem Icon={AvatarUnknownIcon} name="avatarUnknown" />
        <IconItem Icon={BurgerIcon} name="burger" />
        <IconItem Icon={BurgerCircleIcon} name="burgerCircle" />
        <IconItem Icon={CalendarIcon} name="calendar" />
        <IconItem Icon={Calendar2Icon} name="calendar2" />
        <IconItem Icon={CalendarComingSoonIcon} name="calendarComingSoon" />
        <IconItem Icon={CheckMarkIcon} name="checkMark" />
        <IconItem Icon={ChevronBottomIcon} name="chevronBottom" />
        <IconItem Icon={ChevronRightIcon} name="chevronRight" />
        <IconItem Icon={ClockIcon} name="clock" />
        <IconItem Icon={CloseIcon} name="close" />
        <IconItem Icon={CopyIcon} name="copy" />
        <IconItem Icon={ContactIcon} name="contact" />
        <IconItem Icon={CrossStatusIcon} name="crossStatus" />
        <IconItem Icon={DotsIcon} name="dots" />
        <IconItem Icon={DotsCircleIcon} name="dotsCircle" />
        <IconItem Icon={DownloadIcon} name="download" />
        <IconItem Icon={EmptyInvitesIcon} name="emptyInvites" />
        <IconItem Icon={ExclamationMarkIcon} name="exclamationMark" />
        <IconItem Icon={ExpandIcon} name="expand" />
        <IconItem Icon={EyeClosedIcon} name="eyeClosed" />
        <IconItem Icon={EyeOpenIcon} name="eyeOpen" />
        <IconItem Icon={HomeIcon} name="home" />
        <IconItem Icon={InboxIcon} name="inbox" />
        <IconItem Icon={InfoIcon} name="info" />
        <IconItem Icon={InfoErrorIcon} name="infoError" />
        <IconItem Icon={ListIcon} name="list" />
        <IconItem Icon={LocationIcon} name="location" />
        <IconItem Icon={LogOutIcon} name="logOut" />
        <IconItem Icon={MarkIcon} name="mark" />
        <IconItem Icon={MinusIcon} name="minus" />
        <IconItem Icon={NotificationBingIcon} name="notificationBing" />
        <IconItem Icon={PauseIcon} name="pause" />
        <IconItem Icon={PenIcon} name="pen" />
        <IconItem Icon={PencilIcon} name="pencil" />
        <IconItem Icon={PlayIcon} name="play" />
        <IconItem Icon={PlusIcon} name="plus" />
        <IconItem Icon={PointIcon} name="point" />
        <IconItem Icon={PrivacyPolicyIcon} name="privacyPolicy" />
        <IconItem Icon={ReadyStatusIcon} name="readyStatus" />
        <IconItem Icon={ResendIcon} name="resend" />
        <IconItem Icon={ScheduleIcon} name="schedule" />
        <IconItem Icon={SearchIcon} name="search" />
        <IconItem Icon={SettingIcon} name="setting" />
        <IconItem Icon={SettingsIcon} name="settings" />
        <IconItem Icon={TermsIcon} name="terms" />
        <IconItem Icon={TimeIcon} name="time" />
        <IconItem Icon={UploadIcon} name="upload" />
        <IconItem Icon={UrnIcon} name="urn" />
        <IconItem Icon={UseLocationIcon} name="useLocation" />
        <IconItem Icon={UseLocationSecondIcon} name="useLocationSecond" />
        <IconItem Icon={UserDarkIcon} name="userDark" />
        <IconItem Icon={UserPlusIcon} name="userPlus" />
        <IconItem Icon={UserPlusBackgroundIcon} name="userPlusBackground" />
        <IconItem Icon={WifiOffIcon} name="wifiOff" />
        <IconItem Icon={DownNumberActiveIcon} name="downNumberActive" />
        <IconItem Icon={QRCodeIcon} name="qrCode" />
        <IconItem Icon={WarningIcon} name="warning" />
        <IconItem Icon={AccessPoint} name="accessPoint" />
        <IconItem Icon={SortDownIcon} name="sortDown" />
        <IconItem Icon={TimerIcon} name="timer" />
        <IconItem Icon={NoteIcon} name="note" />
        <IconItem Icon={OverStatusIcon} name="overStatus" />
        <IconItem Icon={SearchFindIcon} name="searchFind" />
        <IconItem Icon={SignDocIcon} name="signDoc" />
        <IconItem Icon={MobileIcon} name="mobile" />
        <IconItem Icon={EmailRectAngleIcon} name="emailRectangle" />
        <IconItem Icon={InfoDarkIcon} name="infoDark" />
        <IconItem Icon={CheckMarkFilledIcon} name="checkMarkFilled" />
        <IconItem Icon={CrossFilledIcon} name="crossFilled" />
        <IconItem Icon={WarningTriangleIcon} name="warningTriangle" />
        <IconItem Icon={CloseWithCircleIcon} name="closeWithCircle" />
        <IconItem Icon={ExclamationMarkCircleIcon} name="exclamationMarkCircle" />
        <IconItem Icon={YouTubeIcon} name="youtube" />
        <IconItem Icon={WarningBoldTriangleIcon} name="warningBoldTriangle" />
        <IconItem Icon={PostsIcon} name="posts" />
      </View>
    </ScrollView>

  );
}

export default IconsStories;
