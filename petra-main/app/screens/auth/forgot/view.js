import React from 'react';
import { View } from 'react-native';
import { BaseBackground, Loader, Logo } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';
import { styles } from '../styles';

const ForgotView = ({ navigation, handleForgot, forgotForm, changeData, isLoading }) => {
    return(<>
    { isLoading && <Loader />}
    <BaseBackground>
        <View style={styles.container}>
            <Logo style={{ paddingBottom: 30 }} />
            <AppText size='bolder' style={styles.title}>CONFIRME OS DADOS ABAIXO E RECEBERÁ UM E-MAIL PARA CADASTRAR UMA NOVA SENHA</AppText>
            <AppField value={forgotForm.email} onChangeText={ text => changeData({...forgotForm, email: text })} placeholder='Usuário ou E-mail' />
            <AppButton onPress={handleForgot} label='ENVIAR E-MAIL' style={styles.secondaryButton} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                <AppText onPress={ ()=>navigation.goBack() }  size='bold' style={[styles.subtitle, { textDecorationLine: 'underline' }]}>Voltar para autenticação</AppText>    
            </View>
        </View>
    </BaseBackground>
    </>
)}

export default ForgotView;