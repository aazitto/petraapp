import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import * as yup from "yup";
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';

import * as GoogleSignIn from 'expo-google-sign-in';

import HireVideoProdView from './view'
import { saveVideoProdTicket } from '../../../actions/Management';
import { AppButton } from '../../../components/form';

const HireVideoProdController = ({ navigation, 
    videoProdData, isLoading,
    saveVideoProdTicket, onChangeText }) => {
    const YUPValidation = yup.object().shape({
        videoType: yup.string().required('Deve escolher o tipo de video.' ),
        lyric: yup.string().required('Deve inserir as líricas do video.' ),
        description: yup.string().required('A descrição do video é obrigatória.' ),
        cover: yup.string().required('Deve subir o cover do video.' ),
        audio: yup.string().required('Deve subir o audio do video.' ),
    })
    const handleSaveTicket = () => {
        YUPValidation.validate(videoProdData, {abortEarly: false})
            .then( () => {
                saveVideoProdTicket( videoProdData, navigation )
            }).catch( error =>{
                console.log(error)
                Alert.alert('Ocorreu um erro', error.errors.join('\n'))
            })
    }
    const requestPermission = async () => {
        const imageResult = await ImagePicker.requestCameraPermissionsAsync();
        if( !imageResult.granted ){
            alert('Você não tem permissão para aceder à camera.')
        }
        const libraryResult = await MediaLibrary.requestPermissionsAsync();
        if( !libraryResult.granted ){
            alert('Você não tem permissão para aceder à camera.')
        }
    }
    const openImageLibrary = async () =>{
        const result = await ImagePicker.launchImageLibraryAsync();
        if( !result.cancelled ){
            onChangeText({ ...videoProdData, cover: result.uri })
        }else{
            onChangeText({ ...videoProdData, cover: '' })
        }
    }
    const openAudioLibrary = async () => {
        const result = await DocumentPicker.getDocumentAsync()
        if( result.type === 'success' ){
            if( result.uri.substr( -3 ).toUpperCase() !== 'WAV' ){
                Alert.alert('Erro', 'Só pode subir arquivos com extensão WAV.')
            }else{
                onChangeText({ ...videoProdData, audio: result.uri })
            }
        }else{
            onChangeText({ ...videoProdData, audio: '' })
        }
    }
    useEffect( ()=> {
        onChangeText({
            videoType: '',
            lyric: '',
            description: '',
            cover: '',
            audio: '',
        })
        requestPermission()
    }, [] )
    return(
        <HireVideoProdView 
            videoProdData={videoProdData}
            handleSaveTicket={handleSaveTicket}
            onChangeText={onChangeText}
            isLoading={isLoading}
            openImageLibrary={openImageLibrary}
            openAudioLibrary={openAudioLibrary}
        />
)}

const stateToProps = state => state.management;

const dispatchToProps = dispatch => ({
    saveVideoProdTicket: (videoProdData, navigation) => {
        dispatch( saveVideoProdTicket( videoProdData, navigation ) )
    },
    onChangeText: videoProdData =>{
        dispatch({ type: 'MANAGEMENT_CHANGE_FIELD', target: 'videoProdData', value: videoProdData })
    },
    getUserData: target => {
        dispatch( getUserData( target ) )
    },
})

export default connect( stateToProps, dispatchToProps )(HireVideoProdController);