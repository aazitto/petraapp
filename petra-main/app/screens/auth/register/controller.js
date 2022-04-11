import React from 'react';
import { connect } from 'react-redux';
import * as yup from "yup";
import { Alert } from 'react-native';

import RegisterView from './view';
import { userRegister } from '../../../actions/Auth';

const RegisterController = ({ 
  navigation, 
  userRegister, isLoading, 
  registerForm, changeData,
 }) => {
  const YUPValidation = yup.object().shape({
    fullName: yup.string().required( 'Seu Nome Completo é requerido.' ),
    cpf: yup.string().required( 'Seu CPF é requerido.' ),
    email: yup.string().required( 'Seu e-mail é requerido.' ).email('Seu endereço de e-mail não tem forma de e-mail.'),
    password: yup.string().min( 6, 'Sua senha deve ter ao menos 6 caráteres.' ).test('one-and-one', 'A senha deve ter ao menos uma letra minúsucula, uma letra maiúscula e um número', value => !(!value.match(/\d/) || !value.match(/[A-Z]/) || !value.match(/[a-z]/) )),
    rpassword: yup.string().test('match', "As senhas não são iguais.", value => value === registerForm.password)
  })
  const handleRegister = () => {
    YUPValidation.validate(registerForm, {abortEarly: false}).then( () => {
      userRegister( registerForm, navigation )
    }).catch( error =>{
      Alert.alert( 'Ocorreu um erro', error.errors[0] )
    })
  }
  return (
      <RegisterView 
        navigation={navigation} 
        registerForm={registerForm} 
        changeData={changeData} 
        isLoading={isLoading} 
        handleRegister={handleRegister} 
      />
  );
};

const stateToProps = state => state.auth;

const dispatchToProps = dispatch => ({
  userRegister: ( registerForm, navigation ) => {
    dispatch( userRegister( registerForm, navigation ) )
  },
  changeData: registerForm => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', form: registerForm, formName: 'registerForm' })
  },
})

export default connect( stateToProps, dispatchToProps )( RegisterController);