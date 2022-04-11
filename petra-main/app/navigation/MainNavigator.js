import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, BackHandler } from 'react-native';

import colors from '../config/colors';
import { AppText } from '../components/form';
import { TouchableRipple } from 'react-native-paper';

import { Phonograms, Youtube, Profile } from '../screens/main';
import Home from './HomeNavigator'

const Main = createBottomTabNavigator();
export default function MainNavigator() {
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
    } ,[]);
    return (
        <Main.Navigator
            backBehavior='none'
            screenOptions={({ route }) => ({
                tabBarButton: (props) => {
                    return <TouchableRipple {...props}>{props.children}</TouchableRipple>
                },
                tabBarIcon: ({ focused }) => {
                let name, label;
                switch (route.name) {
                    case 'Home':    
                        name = focused ? 'home-sharp' : 'home-outline' ;   
                        label = 'Home';
                    break;
                    case 'Phonograms':  
                        name = focused ? 'disc'       : 'disc-outline' ;   
                        label = 'Fonogramas';
                    break;
                    case 'Youtube': 
                        name = focused ? 'logo-youtube'       : 'md-play-outline' ;   
                        label = 'Youtube';
                    break;
                    case 'Profile': 
                        name = focused ? 'person'     : 'person-outline' ; 
                        label = 'Perfil';
                    break;
                }
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Icon name={name} color={colors.primary} size={25} />
                        <AppText size={ focused ? 'bold' : 'regular' } style={{ fontSize: 13, color: colors.primary }}>{label}</AppText>
                    </View>
                )
                },
            })}
            tabBarOptions={{ 
            style: {backgroundColor: colors.darkgray, height: 60},
            showLabel: false 
            }}
        >
            <Main.Screen name="Home" component={Home} />
            <Main.Screen name="Phonograms" component={Phonograms} />
            <Main.Screen name="Youtube" component={Youtube} />
            <Main.Screen name="Profile" component={Profile} />
        </Main.Navigator>
    );
}