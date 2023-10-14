import { Icons } from "../../components/Icons";
import { ScreenNames } from "../../global";
import { colors } from "../../global/colors";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import MyActivity from "../../screens/MyActivity/MyActivity";
import MyCalendar from "../../screens/MyCalendar/MyCalendar";
import MyDocuments from "../../screens/MyDocuments/MyDocuments";
import MyInbox from "../../screens/MyInbox/MyInbox";
import Settings from "../../screens/Settings/Settings";

export const ScreensArray = [
  { route: ScreenNames.HOMESCREEN, label: 'Home', type: Icons.Feather, icon: 'home', component: HomeScreen, notification: 0, },
  { route: ScreenNames.MY_INBOX, label: 'My Inbox', type: Icons.Feather, icon: 'inbox', component: MyInbox, notification: 9, },
  { route: ScreenNames.MY_CALENDAR, label: 'My Calendar', type: Icons.Feather, icon: 'calendar', component: MyCalendar, notification: 4, },
  { route: ScreenNames.MY_DOCUMENTS, label: 'My Documents', type: Icons.Feather, icon: 'layers', component: MyDocuments, notification: 0, },
  { route: ScreenNames.MY_ACTIVITY, label: 'My Activity', type: Icons.Feather, icon: 'pie-chart', component: MyActivity, notification: 2, },
  { route: ScreenNames.SETTINGS, label: 'Settings', type: Icons.Feather, icon: 'settings', component: Settings, notification: 0, },
];

export const ProjectsArray = [
  { title: "Personal", icon: "profile", color: colors.icon1, iconType: Icons.AntDesign },
  { title: "travel", icon: "profile", color: colors.icon2, iconType: Icons.AntDesign },
  { title: "Business", icon: "profile", color: colors.icon3, iconType: Icons.AntDesign },
  { title: "Add", icon: "plus", color: colors.icon4, iconType: Icons.AntDesign },
]

export const ProfileMenu = [
  { label: 'History', icon: 'history', iconType: Icons.MaterialIcons },
  { label: 'Rate', icon: 'star', iconType: Icons.MaterialIcons },
  { label: 'Share', icon: 'share', iconType: Icons.MaterialIcons },
  { label: 'Logout', icon: 'logout', iconType: Icons.MaterialIcons },
]