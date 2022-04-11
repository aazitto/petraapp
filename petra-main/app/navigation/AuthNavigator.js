import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from '../config/screenOptions';
import { SignIn, Forgot, PasswordSent, Register, Terms } from '../screens/auth';

import Main from './MainNavigator';
import DrawerNavigator from './DrawerNavigator';
import ProfileDetails from './ProfileDetailsNavigator';

const Auth = createStackNavigator();
const AuthNavigator = () => {
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  } ,[]);
  return(
    <Auth.Navigator screenOptions={screenOptions} >
      <Auth.Screen name="Sign In" component={SignIn} />
      <Auth.Screen name="Register" component={Register} />
      <Auth.Screen name="Forgot" component={Forgot} />
      <Auth.Screen name="Password Sent" component={PasswordSent} />
      <Auth.Screen name="Terms" component={Terms} />
      
      {/* <Auth.Screen name="Main" component={Main} /> */}
      <Auth.Screen name="Main" component={DrawerNavigator} />
      <Auth.Screen name="Profile Details" component={ProfileDetails} />
    </Auth.Navigator>
)};

export default AuthNavigator;