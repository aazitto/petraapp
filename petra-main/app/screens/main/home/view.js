import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { DateTime } from 'luxon';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../config/colors';
import { months } from '../../../config/locale';

import { BaseBackground, Header, Loader } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';
import { styles } from '../styles';

const HomeView = ({ navigation, fullName, dollar, euro, real, handleGoogleSignIn, isLoading }) => {
    // const navigation = useNavigation();

    const luxonDate = DateTime.local();
    const baseDate = `${luxonDate.day} de ${months[luxonDate.month-1]} de ${luxonDate.year}`
    const [ activeCurrency, changeCurrency ] = useState('BRL');
    return(
    <BaseBackground style={{padding: 0, alignItems: 'stretch', justifyContent: 'flex-start'}}>
        { isLoading && <Loader /> }
        <Header/>
        <ScrollView><View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.white, padding: 10, marginBottom: 20 }}>
                <View>
                    <AppText style={{fontSize: 20}}>Boa noite,</AppText>
                    <AppText textProps={{ numberOfLines: 1 }} style={{fontSize: 28}} size='bolder'>{fullName}</AppText>
                    <AppText style={{fontSize: 16}}>{baseDate}</AppText>
                </View>
                <View>
                    <View style={{ backgroundColor: colors.darkgray, borderRadius: 50, padding: 10 }}>
                        <Icon style={{ fontSize: 40, color: colors.white }} name='person' />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: colors.white, padding: 10, marginBottom: 20 }}>
                <AppText size='bolder' style={{fontSize: 16, paddingBottom: 10}}> <FontAwesome5 style={{ fontSize: 16 }} name='piggy-bank' /> SALDO ATUAL</AppText>
                <View style={{ borderWidth: 2, borderColor: colors.opaquegray, padding: 10, justifyContent: 'center' }}>
                    <AppText size='bolder' style={{fontSize: 40, textAlign: 'center'}}>{ 
                        activeCurrency === 'BRL' ? 
                            ('R$ ' + parseFloat(real).toFixed(2)) : 
                                ( activeCurrency === 'USD' ? ('USD ' + parseFloat(dollar).toFixed(2)) : 
                                ( 'EUR ' + parseFloat(euro).toFixed(2))) 
                    }</AppText>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <AppButton onPress={ ()=>changeCurrency('BRL') } containerStyle={{ borderWidth: 2, borderColor: colors.opaquegray, borderRadius: 0, marginHorizontal: 10, marginTop: 20 }} label='BRL' labelStyle={{ color: colors.black, paddingHorizontal: 10, paddingVertical: 5 }} />
                        <AppButton onPress={ ()=>changeCurrency('USD') } containerStyle={{ borderWidth: 2, borderColor: colors.opaquegray, borderRadius: 0, marginHorizontal: 10, marginTop: 20 }} label='USD' labelStyle={{ color: colors.black, paddingHorizontal: 10, paddingVertical: 5 }} />
                        <AppButton onPress={ ()=>changeCurrency('EUR') } containerStyle={{ borderWidth: 2, borderColor: colors.opaquegray, borderRadius: 0, marginHorizontal: 10, marginTop: 20 }} label='EUR' labelStyle={{ color: colors.black, paddingHorizontal: 10, paddingVertical: 5 }} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: colors.white, padding: 10, marginBottom: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AppText size='bolder' style={{fontSize: 16, paddingBottom: 10}}> YOUTUBE</AppText>
                </View>
                <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <AppButton 
                        onPress={handleGoogleSignIn}
                        containerStyle={{ borderColor: colors.black, borderWidth: 1, paddingVertical: 10, paddingHorizontal: 20, elevation: 5, backgroundColor: colors.white }}><View style={{ flexDirection: 'row' }}>
                        <FontAwesome5 style={{ fontSize: 20, color: colors.red, marginRight: 10 }} name='youtube' />
                        <AppText size='bolder'>YOUTUBE LOGIN</AppText>
                    </View></AppButton>
                    <AppText style={{fontSize: 18, paddingBottom: 10}}>Não tem música para esse artista.</AppText>
                </View>
            </View>
            <AppButton style={styles.primaryButton} label='CONTRATAR GESTÃO DE PLATAFORMA' onPress={ ()=>navigation.navigate('Hire Platform') }  />
            <AppButton style={styles.primaryButton} label='CONTRATAR GESTÃO DE LANÇAMENTO' onPress={ ()=>navigation.navigate('Hire Release') }  />
            <AppButton style={styles.primaryButton} label='SOLICITAR SERVIÇO DE PROD. DE VIDEO' onPress={ ()=>navigation.navigate('Hire Video Prod') }  />
        </View></ScrollView>
    </BaseBackground>
)}

export default HomeView;