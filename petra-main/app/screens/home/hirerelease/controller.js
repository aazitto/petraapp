import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import * as yup from "yup";

import HireReleaseView from './view'
import { saveReleaseTicket } from '../../../actions/Management';

const HireReleaseController = ({ navigation, 
    releaseData, isLoading,
    saveReleaseTicket, onChangeText }) => {
    const YUPValidation = yup.object().shape({
        fullName: yup.string().required('O nome completo é requerido.' ),
        releaseType: yup.string().required('Deve escolher o tipo de lançamento.' ),
        discCompany: yup.string().required('Deve escolher o tipo de companhia de disco.' ),
        finalCompany: yup.string().required('Deve escolher quem vai distribuir.' ),
        linkYoutube: yup.string().required('Seu link de YouTube é requerido.' ).url('O link de Youtube tem que ser uma url'),
        linkInstagram: yup.string().required('Seu link de YouTube é requerido.' ).url('O link de instagram tem que ser uma url'),
        linkSpotify: yup.string().url('O link de Spotify tem que ser uma url'),
        pastPlatforms: yup.string().required('As plataformas utilizadas é um campo requerido.' ),
        plan: yup.string().required('Deve escolher o plano que deseja contratar' ),
    })
    const handleSaveTicket = () => {
        YUPValidation.validate(releaseData, {abortEarly: false})
            .then( () => {
                saveReleaseTicket( releaseData, navigation )
            }).catch( error =>{
                console.log(error)
                Alert.alert('Ocorreu um erro', error.errors.join('\n'))
            })
    }
    useEffect( ()=> {
        onChangeText({
            fullName: '',
            releaseType: '',
            discCompany: '',
            finalCompany: '',
            linkYoutube: '',
            linkInstagram: '',
            linkSpotify: '',
            pastPlatforms: '',
            plan: '',
        })
    }, [] )
    return(
        <HireReleaseView 
            releaseData={releaseData}
            handleSaveTicket={handleSaveTicket}
            onChangeText={onChangeText}
            isLoading={isLoading}
        />
)}

const stateToProps = state => state.management;

const dispatchToProps = dispatch => ({
    saveReleaseTicket: (releaseData, navigation) => {
        dispatch( saveReleaseTicket( releaseData, navigation ) )
    },
    onChangeText: releaseData =>{
        dispatch({ type: 'MANAGEMENT_CHANGE_FIELD', target: 'releaseData', value: releaseData })
    },
    getUserData: target => {
        dispatch( getUserData( target ) )
    },
})

export default connect( stateToProps, dispatchToProps )(HireReleaseController);