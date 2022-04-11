import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as yup from "yup";
import { Alert, AsyncStorage } from 'react-native';

import SignInView from './view';
import { userLogin } from '../../../actions/Auth';

const signInController = ({ 
  navigation, 
  userLogin, isLoading, 
  loginForm, changeData,
 }) => {
  const YUPValidation = yup.object().shape({
    email: yup.string().min( 5, 'Seu e-mail é requerido.' ).email('Seu endereço de e-mail não tem forma de e-mail.'),
    password: yup.string().min( 5, 'Sua senha é requerida.' ),
  })
  const handleLogin = () => {
    YUPValidation.validate(loginForm, {abortEarly: false}).then( () => {
      userLogin( loginForm, navigation )
    }).catch( error =>{
      Alert.alert( 'Ocorreu um erro', error.errors[0] )
    })
  }
  useEffect( ()=>{
    AsyncStorage.getItem('loginForm').then( response =>{
      if( response !== null ){
        let data = JSON.parse( response )
        changeData(data)
      }
    })
  }, [] )
  return (
      <SignInView 
        navigation={navigation} 
        loginForm={loginForm} 
        changeData={changeData} 
        isLoading={isLoading} 
        handleLogin={handleLogin} 
      />
  )
};

const stateToProps = state => state.auth;

const dispatchToProps = dispatch => ({
  userLogin: ( loginForm, navigation ) => {
    dispatch( userLogin( loginForm, navigation ) )
  },
  changeData: loginForm => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', form: loginForm, formName: 'loginForm' })
  },
})

export default connect( stateToProps, dispatchToProps )( signInController);