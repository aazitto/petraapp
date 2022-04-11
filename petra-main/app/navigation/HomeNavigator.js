import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from '../config/screenOptions';
import { Home } from '../screens/main';
import { HirePlatform, HireRelease, HireVideoProd } from '../screens/home';

const HomeNav = createStackNavigator();
const HomeNavigator = () => {
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  } ,[]);
  return(
    <HomeNav.Navigator screenOptions={screenOptions} >
      <HomeNav.Screen name="Home" component={Home} />
      <HomeNav.Screen name="Hire Platform" component={HirePlatform} />
      <HomeNav.Screen name="Hire Release" component={HireRelease} />
      <HomeNav.Screen name="Hire Video Prod" component={HireVideoProd} />
    </HomeNav.Navigator>
)};

export default HomeNavigator;