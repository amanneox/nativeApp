import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './home.component';
import AccountScreen from './account.component';
import CartScreen from './cart.component';
import NearByScreen from './nearby.component';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout,BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const HomeIcon = (style) => (
  <Icon {...style} name='home' />
);
const AccountIcon = (style) => (
  <Icon {...style} name='person-outline' />
);
const CartIcon = (style) => (
  <Icon {...style} name='shopping-bag-outline' />
);
const NearIcon = (style) => (
  <Icon {...style} name='compass-outline' />
);
export const TabBarComponent = ({ navigation }) => {

 const onSelect = (index) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation appearance='noIndicator' selectedIndex={navigation.state.index} onSelect={onSelect}>
        <BottomNavigationTab icon={HomeIcon}/>
        <BottomNavigationTab icon={NearIcon}/>
		<BottomNavigationTab icon={CartIcon}/>
		<BottomNavigationTab icon={AccountIcon}/>
      </BottomNavigation>
    </SafeAreaView>
  );
};
 const AppNavigation  = createBottomTabNavigator(
 {
  Home: HomeScreen,
  NearBy: NearByScreen,
  Cart: CartScreen,
  Account: AccountScreen,
 }, 
 {
   initialRouteName: 'Home'
 },
 {
  tabBarComponent:TabBarComponent
 },
);

export default AppNavigation ;