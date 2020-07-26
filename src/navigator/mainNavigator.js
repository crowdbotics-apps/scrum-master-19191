import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
