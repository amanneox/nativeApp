import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from './authNavigation.component'
import AppNavigation  from './navigation.component'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation 
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer