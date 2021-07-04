import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// IMPOR THE SCREENS
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

// GENERATE BAR FROM THE DRAWER NAVIGATION
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#FFF"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#008080',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={RegisterScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarColor: '#008080',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={LoginScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#008080',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              tabBarLabel: 'Details',
              tabBarColor: '#008080',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>)
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
    return <HomeStack.Navigator screenOptions={
              {
                headerStyle: {
                  backgroundColor: '#008080',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }
            }>
            <HomeStack.Screen options={{
              title: 'Xoxo',
              headerLeft: () => {
                <Icon.Button name='ios-menu' size={25} 
                backgroundColor='#008080' onPress={() => {navigation.toggleDrawer()}}></Icon.Button>
              }
            }} name="Home" component={HomeScreen} />
            
        </HomeStack.Navigator>
  }
  
  
  const DetailsStackScreen = ({navigation}) => {
    return <DetailsStack.Navigator screenOptions={
              {
                headerStyle: {
                  backgroundColor: '#008080',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }
            }>
            <DetailsStack.Screen options={{
              title: 'Xoxo',
              
            }} name="Details" component={DetailsScreen} />
            
        </DetailsStack.Navigator>
}

const LoginStackScreen = ({navigation}) => {
    return <LoginStack.Navigator screenOptions={
              {
                headerStyle: {
                  backgroundColor: '#008080',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }
            }>
            <LoginStack.Screen options={{
              title: 'Xoxo'
            }} name="Details" component={LoginScreen} />
            
        </LoginStack.Navigator>
}

const RegisterStackScreen = ({navigation}) => {
    return <RegisterStack.Navigator screenOptions={
              {
                headerStyle: {
                  backgroundColor: '#008080',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }
            }>
            <RegisterStack.Screen options={{
              title: 'Xoxo'
            }} name="Details" component={RegisterScreen} />
            
        </RegisterStack.Navigator>
}
