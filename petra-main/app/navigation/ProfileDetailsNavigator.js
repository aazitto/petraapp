import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from '../config/screenOptions';
import { PersonalData, InvoiceAddress, BankDetails, ChangeEmail, ChangePassword } from '../screens/profile';

const ProfileDetails = createStackNavigator();
const ProfileDetailsNavigator = () => {
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  } ,[]);
  return(
    <ProfileDetails.Navigator screenOptions={screenOptions} >
      <ProfileDetails.Screen name="Personal Data" component={PersonalData} />
      <ProfileDetails.Screen name="Invoice Address" component={InvoiceAddress} />
      <ProfileDetails.Screen name="Bank Details" component={BankDetails} />
      <ProfileDetails.Screen name="Change Email" component={ChangeEmail} />
      <ProfileDetails.Screen name="Change Password" component={ChangePassword} />
    </ProfileDetails.Navigator>
)};

export default ProfileDetailsNavigator;