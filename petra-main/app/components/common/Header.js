import React from 'react';
import { Alert, View } from 'react-native';
import Logo from './Logo';
import { AppButton } from '../form';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ onPressLeft, onPressRight, hasBack, hasRight = true }) => {
    const { navigate, goBack, openDrawer } = useNavigation()
    return(
    <View style={{ backgroundColor: colors.darkgray }}>
        <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {
                hasBack ? 
                <AppButton containerStyle={{ padding: 5, margin: 0, borderRadius: 50, }} onPress={() => goBack()}>
                    <Icon name='arrow-back' style={{ color: colors.primary, fontSize: 30 }} />
                </AppButton>
                :
                <AppButton containerStyle={{ padding: 5, margin: 0, borderRadius: 50, }} onPress={() => openDrawer()}>
                    <Icon name='menu-outline' style={{ color: colors.primary, fontSize: 30 }} />
                </AppButton>
            }
            <View style={{ justifyContent: 'flex-start', flex: 1 }}>
                <Logo imageStyle={{ height: 40, width: 120 }} />
            </View>
            {
                hasRight &&
                <AppButton containerStyle={{ padding: 5, margin: 0, borderRadius: 50, }} onPress={()=>{
                    Alert.alert('Sair do Aplicativo', 'Está seguro que quer sair do app', 
                    [
                        {
                            text: 'Sair', onPress: () => navigate('Sign In')
                        },
                        {
                            text: 'Cancelar'
                        }
                    ], { cancelable: false } )
                }}>
                    <Icon name='power-outline' style={{ color: colors.primary, fontSize: 30 }} />
                </AppButton>
            }
        </View>
    </View>
)}

export default Header;