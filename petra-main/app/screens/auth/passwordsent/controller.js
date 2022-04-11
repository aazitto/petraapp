import React, { useEffect } from 'react';
import PasswordSentView from './view';

const PasswordSentController = ({ navigation }) => {
  useEffect( ()=>{
    let timer = setTimeout(() => {
      navigation.navigate('Sign In')
      clearTimeout(timer)
    }, 3000);
  }, [] )
  return <PasswordSentView />
};

export default PasswordSentController