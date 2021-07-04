import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView,View,StyleSheet, ScrollView,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// IMPORT FROM SCREENS
import MainTabScreen from './screens/MainStackScreen';
import { DrawerContent } from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen'

// // GENERATE BAR FROM THE DRAWER NAVIGATION
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

