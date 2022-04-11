import React, { useState } from 'react';
import { View } from 'react-native';

import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles';
import colors from '../../../config/colors';

import { BaseBackground, Loader, Logo } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';

const SignInView = ({ navigation, handleLogin, loginForm, changeData, isLoading }) => {
    const handleCheck = () => {
        changeData({ ...loginForm, savePass: !loginForm.savePass })
    }

    const [visibility, setVisibility] = useState(false);
    const icon = !visibility ? "eye" : "eye-off";

    return (<>
        { isLoading && <Loader />}
        <BaseBackground>
            <View style={styles.container}>
                <Logo style={{ paddingBottom: 30 }} />
                <AppText size='bolder' style={styles.title}>FAÇA SEU LOGIN</AppText>
                <AppField value={loginForm.email} onChangeText={text => changeData({ ...loginForm, email: text })} placeholder='Usuário ou E-mail' />
                <View style={{ flexDirection: 'row',  }}>
                    <AppField value={loginForm.password} onChangeText={text => changeData({ ...loginForm, password: text })} inputProps={{ secureTextEntry: !visibility }} placeholder='Senha' width={332}/>
                    <Icon
                        name={icon}
                        size={24}
                        color={"#CAA917"}
                        onPress={() => setVisibility(!visibility)}
                        style={{
                            padding: 3,
                            right: 50,
                            textAlign: "center",
                            textAlignVertical: "center",
                        }}
                    />
                </View>
                <View style={styles.checkContainer}>
                    <Checkbox uncheckedColor={colors.primary} status={loginForm.savePass ? 'checked' : 'unchecked'} color={colors.primary} onPress={handleCheck} />
                    <AppText onPress={handleCheck} style={styles.subtitle}>Gravar minha senha</AppText>
                </View>
                <AppButton onPress={handleLogin} label='LOGIN' style={styles.secondaryButton} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                    <AppText style={styles.subtitle}>Problemas de acesso? </AppText>
                    <AppText onPress={() => navigation.navigate("Forgot")} size='bold' style={[styles.subtitle, { textDecorationLine: 'underline' }]}>Clique aqui</AppText>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                    <AppText style={styles.subtitle}>Ainda não esta cadastrado? </AppText>
                    <AppText onPress={() => navigation.navigate("Register")} size='bold' style={[styles.subtitle, { textDecorationLine: 'underline' }]}>Cadastre-se aqui</AppText>
                </View>
                <View style={{ alignItems: 'center', paddingTop: 100 }}>
                    <AppText style={styles.terms}>Ao utilizar nossa plataforma, você está de acordo com os </AppText>
                    <AppText onPress={() => navigation.navigate("Terms")} size='bold' style={[styles.terms, { textDecorationLine: 'underline' }]}>Termos de Uso e Política de Privacidade</AppText>
                </View>
            </View>
        </BaseBackground>
    </>
    )
}

export default SignInView;