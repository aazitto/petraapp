import firebase from '../config/firebase';
import 'firebase/firestore'
import { Alert, AsyncStorage } from 'react-native';
import axios from 'axios';

const serverOptions = { source: 'server' }

export const loginFormClean = () => dispatch => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', 
        formName: 'loginFormClean', 
        value: {
            email: '',
            password: '',
            savePass: false,  
        }
    })

}

export const forgotFormClean = () => dispatch => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', 
        formName: 'forgotFormClean', 
        value: {
            email: '',
        }
    })

}

export const registerFormClean = () => dispatch => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', 
        formName: 'registerFormClean', 
        value: {
            fullName: '',
            cpf: '',
            email: '',
            password: '',
            rpassword: '',
        }
    })

}

export const passchangeFormClean = () => dispatch => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', 
        formName: 'passchangeFormClean', 
        value: {
            oldpass: '',
            newpass: '',
            newpassrepeat: '',
        }
    })
}

export const emailchangeFormClean = () => dispatch => {
    dispatch({ type: 'AUTH_CHANGE_FIELD', 
        formName: 'emailchangeFormClean', 
        value: {
            pass: '',
            newmail: '',
        }
    })
}

export const getUserData = target => dispatch => {
    console.error('target', target);
    console.error('dispatch', dispatch);
    dispatch({ type: 'USER_TOGGLE_LOADER', isLoading: true })
    dispatch({ type: 'USER_LOAD_DATA', target: target || 'userData', value: {} })
    AsyncStorage.getItem( 'activeUser' ).then( response => {
        const user = JSON.parse(response)
        const usersCollection = firebase.firestore().collection('users');
        if( user.uid ){
            usersCollection.doc(user.uid).get(serverOptions).then( docReference => {
                dispatch({ type: 'USER_LOAD_DATA', target: target || 'userData', value: docReference.data() })
                AsyncStorage.setItem( 'activeUser', JSON.stringify(docReference.data()) )
                dispatch({ type: 'USER_TOGGLE_LOADER', isLoading: false })
            } )
        }else{
            usersCollection.where('email', '==', user.email ).get(serverOptions).then( querySnapshot => {
                const uid = querySnapshot.docs[0].id;
                usersCollection.doc( uid ).set({ uid, real: 0, euro: 0, dollar: 0 }, { merge: true }).then( ()=>{
                    dispatch( getUserData() )
                    const userData = {...user, uid }
                    dispatch({ type: 'USER_LOAD_DATA', target: 'userData', value: userData })
                    AsyncStorage.setItem( 'activeUser', JSON.stringify(userData) )
                } )
            })
        }
    })
}

export const userEdit = ( userData, navigation ) => dispatch => {
    firebase.firestore().collection('users').doc( userData.uid ).set(userData).then( ()=> {
        Alert.alert('Sucesso', 'Dados salvados com sucesso!');
        navigation.goBack();
        dispatch( getUserData() );
    })
    .catch( error => {
        console.log( error )
    } )
}

export const getInvoiceAddress = target => (dispatch, getState) => {
    dispatch({ type: 'USER_LOAD_DATA', target: target || 'invoiceData', value: {} })
    const { user } = getState();
    firebase.firestore().collection('invoiceData').doc(user.userData.uid).get(serverOptions).then( docSnapshot => {
        if( docSnapshot.data() ){
            dispatch({ type: 'USER_LOAD_DATA', target: target || 'invoiceData', value: docSnapshot.data() })
        }else{
            if( !target ) Alert.alert('Dados não estabelecidos', 'Por favor, forneça seus dados para poder fazer melhor seguimento de você no app.')
        }
    })
}

export const invoiceEdit = ( invoiceData, navigation ) => ( dispatch, getState ) => {
    const { user } = getState();
    const id = invoiceData.uid || user.userData.uid;
    firebase.firestore().collection('invoiceData').doc( id ).set(invoiceData).then( ()=> {
        Alert.alert('Sucesso', 'Dados salvados com sucesso!');
        navigation.goBack();
        dispatch( getInvoiceAddress() );
    })
    .catch( error => {
        console.log( error )
    } )
}

export const getBankAccount = target => (dispatch, getState) => {
    dispatch({ type: 'USER_LOAD_DATA', target: target || 'bankData', value: {} })
    const { user } = getState();
    firebase.firestore().collection('bankData').doc(user.userData.uid).get(serverOptions).then( docSnapshot => {
        if( docSnapshot.data() ){
            dispatch({ type: 'USER_LOAD_DATA', target: target || 'bankData', value: docSnapshot.data() })
        }else{
            if( !target ) Alert.alert('Dados não estabelecidos', 'Por favor, forneça seus dados para poder fazer melhor seguimento de você no app.')
        }
    })
}

export const bankEdit = ( bankData, navigation ) => ( dispatch, getState ) => {
    const { user } = getState();
    const id = bankData.uid || user.userData.uid;
    firebase.firestore().collection('bankData').doc( id ).set(bankData).then( ()=> {
        Alert.alert('Sucesso', 'Dados salvados com sucesso!');
        navigation.goBack();
        dispatch( getBankAccount() );
    })
    .catch( error => {
        console.log( error )
    } )
}

export const getCEP = text => ( dispatch, getState ) => {
    axios.get( `https://ws.apicep.com/cep.json?code=${text}`)
        .then( response => {
            const invoiceForm = getState().user.invoiceForm;
            const { ok, address, state, city, district } = response.data;
            if( ok ){
                dispatch({ type: 'USER_LOAD_DATA', target: 'invoiceForm', value: {...invoiceForm, logradouro: address, bairro: district, estado: state, cidade: city } })
            }else{
                Alert.alert('CEP não achado', 'O CEP inserido não foi achado, verifique e tente de novo.')
                dispatch({ type: 'USER_LOAD_DATA', target: 'invoiceForm', value: {...invoiceForm,  cep: '', logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '' }  })
            }
        } )
}