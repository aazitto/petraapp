import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { BaseBackground, Header, Loader, Logo } from '../../../components/common';
import { AppButton, AppField, AppSelector, AppText } from '../../../components/form';
//import { styles } from '../styles';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit'

const PhonogramsView = ({ navigation }) => {
    const size = Dimensions.get('screen').width/2-60;
    return(
    <BaseBackground style={{padding: 0, alignItems: 'stretch', justifyContent: 'flex-start'}}>
        <Header onPressLeft={()=>console.log('menu')} onPressRight={()=>console.log('bell')} />
        <ScrollView style={{ padding: 20 }}>
            <AppText size='bold' style={{ color: colors.primary, fontSize: 18 }}><Icon name='easel-outline' style={{ fontSize: 18, color: colors.primary }} /> FONOGRAMAS</AppText>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
                <View style={{padding: 20}}>
                    <View style={{ backgroundColor: colors.opaquegray, height: size, width: size }}></View>
                    <AppText size='bold' style={{ color: colors.primary, fontSize: 18, textAlign: 'center' }}>DISTRIBUIDO</AppText>
                </View>
                <View style={{padding: 20}}>
                    <View style={{ backgroundColor: colors.opaquegray, height: size, width: size }}></View>
                    <AppText size='bold' style={{ color: colors.primary, fontSize: 18, textAlign: 'center' }}>DISTRIBUIDO</AppText>
                </View>
                <View style={{padding: 20}}>
                    <View style={{ backgroundColor: colors.opaquegray, height: size, width: size }}></View>
                    <AppText size='bold' style={{ color: colors.primary, fontSize: 18, textAlign: 'center' }}>DISTRIBUIDO</AppText>
                </View>
                <View style={{padding: 20}}>
                    <View style={{ backgroundColor: colors.opaquegray, height: size, width: size }}></View>
                    <AppText size='bold' style={{ color: colors.primary, fontSize: 18, textAlign: 'center' }}>DISTRIBUIDO</AppText>
                </View>
                <View style={{padding: 20}}>
                    <View style={{ backgroundColor: colors.opaquegray, height: size, width: size }}></View>
                    <AppText size='bold' style={{ color: colors.primary, fontSize: 18, textAlign: 'center' }}>DISTRIBUIDO</AppText>
                </View>
                <View style={{padding: 20}}>
                    <View style={{ backgroundColor: colors.opaquegray, height: size, width: size }}></View>
                    <AppText size='bold' style={{ color: colors.primary, fontSize: 18, textAlign: 'center' }}>DISTRIBUIDO</AppText>
                </View>
            </View>
        </ScrollView>
    </BaseBackground>
)}

export default PhonogramsView;