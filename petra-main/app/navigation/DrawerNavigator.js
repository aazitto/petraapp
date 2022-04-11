import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './MainNavigator';
import { Phonograms, Youtube, Profile } from '../screens/main';

import Drawer from '../components/Drawer';

const DrawerNav = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Início"
      drawerContent={(props) => <Drawer {...props} />}
      drawerType="front"
    >
      <DrawerNav.Screen name="Início" component={Main} />
      <DrawerNav.Screen name="Phonograms" component={Phonograms} />
      <DrawerNav.Screen name="Youtube" component={Youtube} />
      <DrawerNav.Screen name="Profile" component={Profile} />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;