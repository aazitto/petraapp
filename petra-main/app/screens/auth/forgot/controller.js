import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';

import * as yup from "yup";
import ForgotView from './view';
import { userForgot } from '../../../actions/Auth';

const ForgotController = ({ 
  navigation, 
  userForgot, isLoading, 
  forgotForm, changeData,
 }) => {
  const YUPValidation = yup.object().shape({
    email: yup.string().min( 5, 'Seu e-mail é requerido.' ).email('Seu endereço de e-mail não tem forma de e-mail.'),
  })
  const handleForgot = () => {
    YUPValidation.validate(forgotForm, {abortEarly: false}).then( () => {
      userForgot( forgotForm, navigation )
    }).catch( error =>{
      Alert.alert( 'Ocorreu um erro', error.errors[0] )
    })
  }
  return (
      <ForgotView 
        navigation={navigation} 
        forgotForm={forgotForm} 
        changeData={changeData} 
        isLoading={isLoading} 
        handleForgot={handleForgot} 
      />
  );
};

const stateToProps = state => state.auth;

const dispatchToProps = dispatch => ({
  userForgot: ( forgotForm, navigation ) => {
    dispatch( userForgot( forgotForm, navigation ) )
  },
  changeData: forgotForm => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', form: forgotForm, formName: 'forgotForm' })
  },
})

export default connect( stateToProps, dispatchToProps )( ForgotController);