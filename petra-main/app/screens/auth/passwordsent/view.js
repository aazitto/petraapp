import React from 'react';
import { View } from 'react-native';
import { BaseBackground, Logo } from '../../../components/common';
import { AppText } from '../../../components/form';
import { styles } from '../styles';

const PasswordSentView = () => (
    <BaseBackground>
        <View style={styles.container}>
            <Logo style={{ paddingBottom: 30 }} />
            <AppText size='bolder' style={styles.title}>REVISE SUA CAIXA DE ENTRADA. DEVE TER UM MAIL NOSSO PARA RESETAR SUA SENHA.</AppText>
        </View>
    </BaseBackground>
)

export default PasswordSentView;