import firebase from '../config/firebase';
import 'firebase/firestore'
import { Alert, AsyncStorage, LogBox } from 'react-native';
import errorCodes from '../config/errorCodes';
import { getUserData } from './User';

const serverOptions = { source: 'server' }

LogBox.ignoreLogs(['Setting a timer']);

export const userLogin = ( loginForm, navigation ) => dispatch => {
    dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: true }) 
    firebase.auth().signInWithEmailAndPassword( loginForm.email, loginForm.password ).then( response => {
        firebase.firestore().collection('users').where('email','==', loginForm.email ).get(serverOptions).then( querySnapshot => {
            const activeUser = querySnapshot.docs[0].data();
            AsyncStorage.setItem( 'activeUser', JSON.stringify(activeUser) )
            dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
            navigation.navigate( 'Main', { screen: 'Home' } )
        }).catch( error => {
            dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
        })

        if( loginForm.savePass ){
            AsyncStorage.setItem( 'loginForm', JSON.stringify(loginForm) )
            AsyncStorage.setItem( 'uid', response.user.uid )
        }else{
            AsyncStorage.removeItem( 'loginForm' )
            AsyncStorage.removeItem( 'uid' )
        }
    }).catch( error =>{
        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false })
        Alert.alert('Erro', errorCodes[error.code])
    })
}

export const userRegister = ( registerForm, navigation ) => dispatch =>{
    dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: true }) 
    firebase.firestore().collection('users').where('cpf','==',registerForm.cpf).get(serverOptions).then( querySnapshot => {
        if( !querySnapshot.docs.length ){
            firebase.auth().createUserWithEmailAndPassword( registerForm.email, registerForm.password ).then( response =>{
                firebase.firestore().collection('users')
                    .add({
                        uid: response.user.uid,
                        fullName: registerForm.fullName,
                        cpf: registerForm.cpf,
                        email: registerForm.email,
                        createdAt: response.user.metadata.creationTime
                    }).then(() => {
                        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
                        Alert.alert('Sucesso', "Usuário cadastro com sucesso.")
                        let timer = setTimeout(() => {
                            clearTimeout(timer)
                            navigation.navigate('Sign In')
                        }, 3000);
                    }).catch( error => {
                        console.log(error)
                    } );
            }).catch( error => {
                dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
                Alert.alert('Erro', errorCodes[error.code])
            })
        }else{
            dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
            Alert.alert('Erro', "O CPF inserido já está no sistema.")
        }
    } )
}

export const userForgot = ( forgotForm, navigation ) => dispatch => {
    dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: true }) 
    firebase.auth().sendPasswordResetEmail(forgotForm.email).then( () => {
        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
        navigation.navigate('Password Sent')
    }).catch( error =>{
        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false })
        Alert.alert('Erro', errorCodes[error.code])
    })
}

export const passwordChange = (passchangeForm, navigation) => ( dispatch, getState ) =>{
    const { email } = getState().user.userData;
    const { oldpass, newpass } = passchangeForm;
    
    dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: true }) 
    firebase.auth().signInWithEmailAndPassword( email, oldpass ).then( ()=>{
        firebase.auth().currentUser.updatePassword( newpass )
            .then( ()=>{
                Alert.alert('Sucesso', 'A atualização da senha teve sucesso.')
                navigation.goBack();
                dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
            })
            .catch( error => {
                Alert.alert('Erro', 'A atualização não teve sucesso. Tente fechar o app e entrar novamente.')
                dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
        } )
    }).catch( error =>{
        Alert.alert('Erro', errorCodes[error.code])
        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
    } )
}

export const emailChange = (emailchangeForm, navigation) => ( dispatch, getState ) =>{
    const { userData } = getState().user;
    const { email } = userData;
    const { pass, newmail } = emailchangeForm;

    dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: true }) 
    firebase.auth().signInWithEmailAndPassword( email, pass ).then( ()=>{
        firebase.auth().currentUser.updateEmail( newmail )
            .then( ()=>{
                const usersCollection = firebase.firestore().collection('users');
                usersCollection.where('email', '==', email ).get(serverOptions).then( querySnapshot =>{
                    const uid = querySnapshot.docs[0].id;
                    usersCollection.doc( uid ).set({ email: newmail }, { merge: true }).then( ()=>{
                        const newUserData = {...userData, email: newmail }
                        dispatch({ type: 'USER_LOAD_DATA', target: 'userData', value: newUserData })
                        AsyncStorage.setItem( 'activeUser', JSON.stringify(newUserData) )
                        dispatch( getUserData() )
                    
                        Alert.alert('Sucesso', 'A atualização de e-mail teve sucesso.')
                        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
                        navigation.goBack();
                    } )
                })
            })
            .catch( error => {
                Alert.alert('Erro', 'A atualização não teve sucesso. Tente fechar o app e entrar novamente.')
                dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
        } )
    }).catch( error =>{
        Alert.alert('Erro', errorCodes[error.code])
        dispatch({ type: 'AUTH_TOGGLE_LOADER', isLoading: false }) 
    } )
}