import firebase from '../config/firebase';
import 'firebase/firestore'
import { Alert, AsyncStorage } from 'react-native';
import axios from 'axios';

const serverOptions = { source: 'server' }

export const savePlatformTicket = ( platformsData, navigation ) => dispatch => {
    dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: true })
    AsyncStorage.getItem( 'activeUser' ).then( response => {
        const user = JSON.parse(response)
        const platformTickets = firebase.firestore().collection('platformTickets');

        platformTickets.add({
            ...platformsData, user: user.uid, status: 'pendente'
        }).then( ()=>{
            Alert.alert('Sucesso', 'Ticket Criado com sucesso.')
            navigation.goBack();
            dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
        } ).catch( error => {
            console.log(error)
            dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
        } );
    })
}

export const saveReleaseTicket = ( releaseData, navigation ) => dispatch => {
    dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: true })
    AsyncStorage.getItem( 'activeUser' ).then( response => {
        const user = JSON.parse(response);
        const releaseTickets = firebase.firestore().collection('releaseTickets');

        releaseTickets.add({
            ...releaseData, user: user.uid, status: 'pendente'
        }).then( ()=>{
            Alert.alert('Sucesso', 'Ticket Criado com sucesso.')
            navigation.goBack();
            dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
        } ).catch( error => {
            console.log(error)
            dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
        } );
    })
}

const getImageToBlob = async (uri, targetName, folder) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref( folder + '/' + targetName);
    return ref.put(blob);
}

export const saveVideoProdTicket = ( videoProdData, navigation ) => dispatch => {
    dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: true })
    const targetPhoto = videoProdData.cover.substring( videoProdData.cover.indexOf('ImagePicker/')+14 )
    const targetAudio = videoProdData.audio.substring( videoProdData.audio.indexOf('DocumentPicker')+15 )
    const getURL = async name => await firebase.storage().ref(name).getDownloadURL();

    getImageToBlob(videoProdData.cover, targetPhoto, 'covers').then( () => {
        getURL( 'covers/'+targetPhoto ).then( imageUrl =>{
            getImageToBlob(videoProdData.audio, targetAudio, 'audio').then( () => {
                getURL( 'audio/'+targetAudio ).then( audioUrl =>{
                    firebase.firestore().collection('videoProdTickets')
                        .add({...videoProdData, cover: imageUrl, audio: audioUrl, createdAt: new Date() })
                        .then( () => {
                            console.log('Ended')
                            Alert.alert('Ended', 'Success')
                            navigation.goBack();
                            dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
                        }).catch( error =>{
                            console.log( 'error1', error )
                            Alert.alert('Error', 'Error')
                            dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
                        })
                }).catch( error =>{
                    console.log( 'error2', error )
                    Alert.alert('Error', 'Error')
                    dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
                })
            }).catch( error =>{
                console.log( 'error3', error )
                Alert.alert('Error', 'Error')
                dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
            })
        })
    }).catch( error =>{
        console.log( 'error4', error )
        Alert.alert('Error', 'Error')
        dispatch({ type: 'MANAGEMENT_TOGGLE_LOADER', isLoading: false })
    })
}
