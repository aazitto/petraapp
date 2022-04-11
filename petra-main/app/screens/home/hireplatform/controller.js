import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import * as yup from "yup";

import HirePlatformView from './view'
import { savePlatformTicket } from '../../../actions/Management';

const HirePlatformController = ({ navigation, 
    platformsData, isLoading,
    savePlatformTicket, onChangeText }) => {
    const YUPValidation = yup.object().shape({
        fullName: yup.string().required('O nome completo é requerido.' ),
        currentProducts: yup.string().required('O número de produtos lançados é requerido.' ),
        pastPlatforms: yup.string().required('As plataformas utilizadas é um campo requerido.' ),
        nextMusics: yup.string().required('O número de próximos fonogramas é requerido.' ),
        linkYoutube: yup.string().required('Seu link de YouTube é requerido.' ).url('O link tem que ser uma url'),
        linkInstagram: yup.string().required('Seu link de Instagram é requerido.' ).url('O link tem que ser uma url'),
        linkSpotify: yup.string().url('O link de Spotify tem que ser uma url'),
    })
    const handleSaveTicket = () => {
        YUPValidation.validate(platformsData, {abortEarly: false})
            .then( () => {
                //console.log(platformsData)
                savePlatformTicket( platformsData, navigation )
            }).catch( error =>{
                console.log(error)
                Alert.alert('Ocorreu um erro', error.errors.join('\n'))
            })
    }
    useEffect( ()=> {
        onChangeText({
            fullName: '',
            currentProducts: '',
            pastPlatforms: '',
            nextMusics: '',
            linkYoutube: '',
            linkInstagram: '',
            linkSpotify: '',
        })
        //getUserData( 'platformsData' )
    }, [] )
    return(
        <HirePlatformView 
            platformsData={platformsData}
            handleSaveTicket={handleSaveTicket}
            onChangeText={onChangeText}
            isLoading={isLoading}
        />
)}

const stateToProps = state => state.management;

const dispatchToProps = dispatch => ({
    savePlatformTicket: (platformsData, navigation) => {
        dispatch( savePlatformTicket( platformsData, navigation ) )
    },
    onChangeText: platformsData =>{
        dispatch({ type: 'MANAGEMENT_CHANGE_FIELD', target: 'platformsData', value: platformsData })
    },
    getUserData: target => {
        dispatch( getUserData( target ) )
    },
})

export default connect( stateToProps, dispatchToProps )(HirePlatformController);