import axios from 'axios';
import * as AppAuth from 'expo-app-auth';
import { Alert, AsyncStorage } from 'react-native';

const config = {
    issuer: 'https://accounts.google.com',
    scopes: [
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly', 
        'https://www.googleapis.com/auth/yt-analytics.readonly',
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
        'https://www.googleapis.com/auth/youtube.force-ssl',
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/youtube.upload',
        'https://www.googleapis.com/auth/youtubepartner',
        'https://www.googleapis.com/auth/youtubepartner-channel-audit',
    ],
    clientId: '1080498164929-ohnrd08vu1pflvghtbbmmfou4k5h1cu4.apps.googleusercontent.com',
}

export const handleGoogleSignIn = () => dispatch => {
    try {
        googleSignIn()
            .then( credentials =>{
            console.log(credentials)
            axios.get(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyBZdbsu0WptJ6tqqKs1DI8uZtOjFw4n_b4`, {
                headers: { 
                    Authorization: `Bearer ${credentials.accessToken}`,
                    Accept: 'application/json'
                }
            })
            .then( resp => {
                console.log( resp )
            }).catch( error =>{
                console.log( error )
            } )
            //saveGoogleCredentials( credentials )
        })
    } catch (error) {
        console.log( error )
    }
}

const googleSignIn = async () => {
    try {
        const authState = await AppAuth.authAsync(config);
        return authState;
    } catch (error) {
        Alert.alert('Atenção', 'Login Cancelado')
        console.log(error)
    }
}

const saveGoogleCredentials = async credentials => {
    return await AsyncStorage.setItem( 'GoogleCredentials', JSON.stringify(credentials) )
}

const refreshGoogleCredentials = async ( refreshToken ) => {
    let credentials = await AppAuth.refreshAsync(config, refreshToken);
    saveGoogleCredentials( credentials )
    return credentials
}

const getGoogleCredentials = async (isLogged) => {
    const jsonCredentials = await AsyncStorage.getItem( 'GoogleCredentials' );
    const credentials = JSON.parse(jsonCredentials);
    const tokenExpired = new Date(credentials.accessTokenExpirationDate) < new Date() 
    if( isLogged ){
        if( tokenExpired ){
            return refreshGoogleCredentials( credentials.refreshToken )
        }else{
            return credentials;
        }
    }
}