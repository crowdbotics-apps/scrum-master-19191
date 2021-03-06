import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile84686Navigator from '../features/UserProfile84686/navigator';
import Tutorial84685Navigator from '../features/Tutorial84685/navigator';
import NotificationList84657Navigator from '../features/NotificationList84657/navigator';
import Settings84656Navigator from '../features/Settings84656/navigator';
import Settings84648Navigator from '../features/Settings84648/navigator';
import UserProfile84646Navigator from '../features/UserProfile84646/navigator';
import UserProfile84596Navigator from '../features/UserProfile84596/navigator';
import Tutorial84595Navigator from '../features/Tutorial84595/navigator';
import NotificationList84567Navigator from '../features/NotificationList84567/navigator';
import Settings84566Navigator from '../features/Settings84566/navigator';
import Settings84558Navigator from '../features/Settings84558/navigator';
import UserProfile84556Navigator from '../features/UserProfile84556/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile84686: { screen: UserProfile84686Navigator },
Tutorial84685: { screen: Tutorial84685Navigator },
NotificationList84657: { screen: NotificationList84657Navigator },
Settings84656: { screen: Settings84656Navigator },
Settings84648: { screen: Settings84648Navigator },
UserProfile84646: { screen: UserProfile84646Navigator },
UserProfile84596: { screen: UserProfile84596Navigator },
Tutorial84595: { screen: Tutorial84595Navigator },
NotificationList84567: { screen: NotificationList84567Navigator },
Settings84566: { screen: Settings84566Navigator },
Settings84558: { screen: Settings84558Navigator },
UserProfile84556: { screen: UserProfile84556Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
