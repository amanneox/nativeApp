import { createStackNavigator } from 'react-navigation-stack'
import Login from './login.component'
import Signup from './signup.component'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Login',
	headerMode: 'none'

  }
)

export default AuthNavigation