import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import HomeView from './view';
import { getUserData } from '../../../actions/User';
import { handleGoogleSignIn } from '../../../actions/Google';

const HomeController = ({ 
  navigation, isLoading,
  getUserData, fullName, dollar, euro, real,
  handleGoogleSignIn
 }) => {
   const userData = { fullName, dollar, euro, real, isLoading }
    useEffect( ()=>{
        getUserData()
    }, [] )
  return (
      <HomeView
        handleGoogleSignIn={handleGoogleSignIn}
        navigation={navigation} 
        {...userData}
      />
  );
};

const stateToProps = state => {
  const { userData } = state.user;
  return {...userData}
};

const dispatchToProps = dispatch => ({
  getUserData: ( ) => {
    dispatch( getUserData() )
  },
  handleGoogleSignIn: ( ) => {
    dispatch( handleGoogleSignIn() )
  },
})

export default connect( stateToProps, dispatchToProps )( HomeController);