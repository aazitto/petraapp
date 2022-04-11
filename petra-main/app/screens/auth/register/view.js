import React, { useState } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles';
import { BaseBackground, Loader, Logo } from '../../../components/common';
import { AppButton, AppField, AppMaskedField, AppText } from '../../../components/form';

const RegisterView = ({ navigation, handleRegister, registerForm, changeData, isLoading }) => {

    const [visibility, setVisibility] = useState(false);
    const icon = !visibility ? "eye" : "eye-off";

    const [visibility2, setVisibility2] = useState(false);
    const icon2 = !visibility2 ? "eye" : "eye-off";

    return (<>
        { isLoading && <Loader />}
        <BaseBackground>
            <View style={styles.container}>
                <Logo style={{ paddingBottom: 30 }} />
                <AppText size='bolder' style={styles.title}>CADASTRE SEUS DADOS</AppText>
                <AppField value={registerForm.fullName} onChangeText={text => changeData({ ...registerForm, fullName: text })} placeholder='Nome Completo' />
                <AppField mask='cpf' value={registerForm.cpf} onChangeText={text => changeData({ ...registerForm, cpf: text })} placeholder='CPF' />
                <AppField value={registerForm.email} onChangeText={text => changeData({ ...registerForm, email: text })} placeholder='E-mail' />
                <View style={{ flexDirection: 'row' }}>
                    <AppField value={registerForm.password} onChangeText={text => changeData({ ...registerForm, password: text })} inputProps={{ secureTextEntry: !visibility }} placeholder='Senha' width={332}/>
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
                <View style={{ flexDirection: 'row' }}>
                    <AppField value={registerForm.rpassword} onChangeText={text => changeData({ ...registerForm, rpassword: text })} inputProps={{ secureTextEntry: !visibility2 }} placeholder='Repetir Senha' width={332}/>
                    <Icon
                        name={icon2}
                        size={24}
                        color={"#CAA917"}
                        onPress={() => setVisibility2(!visibility2)}
                        style={{
                            padding: 3,
                            right: 50,
                            textAlign: "center",
                            textAlignVertical: "center",
                        }}
                    />
                </View>

                <AppButton onPress={handleRegister} label='CADASTRAR' style={styles.secondaryButton} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                    <AppText onPress={() => navigation.goBack()} size='bold' style={[styles.subtitle, { textDecorationLine: 'underline' }]}>Voltar para autenticação</AppText>
                </View>
            </View>
        </BaseBackground>
    </>
    )
}

export default RegisterView;