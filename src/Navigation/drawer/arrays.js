import { Icons } from "../../components/Icons";
import { ScreenNames } from "../../global";
import { colors } from "./colors";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import MyActivity from "../../screens/MyActivity/MyActivity";
import Essentials from "../../screens/Essentials/Essentials";
import MyInbox from "../../screens/MyInbox/MyInbox";
import Settings from "../../screens/Settings/Settings";
import ProductPage from "../../screens/ProductPage/ProductPage";

export const ScreensArray = [
  { route: ScreenNames.HOMESCREEN, label: 'Home', type: Icons.Ionicons, icon: 'home-outline', component: HomeScreen, notification: 0, },
  { route: ScreenNames.MY_INBOX, label: 'My Inbox', type: Icons.Feather, icon: 'inbox', component: MyInbox, notification: 9, },
  { route: ScreenNames.PRODUCT_PAGE, label: 'Product Page', type: Icons.MaterialCommunityIcons, icon: 'shopping-outline', component: ProductPage, notification: 4, },
  { route: ScreenNames.ESSENTIALS, label: 'Essentials', type: Icons.Ionicons, icon: 'aperture-outline', component: Essentials, notification: 5, },
  { route: ScreenNames.MY_ACTIVITY, label: 'My Activity', type: Icons.Feather, icon: 'pie-chart', component: MyActivity, notification: 2, },
  { route: ScreenNames.SETTINGS, label: 'Settings', type: Icons.Feather, icon: 'settings', component: Settings, notification: 110, },
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