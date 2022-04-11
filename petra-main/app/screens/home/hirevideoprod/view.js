import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { BaseBackground, Header, Loader } from '../../../components/common';
import { AppButton, AppField, AppSelector, AppText } from '../../../components/form';
import { styles } from '../styles';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const HireVideoProdView = ({ 
    videoProdData, handleSaveTicket, onChangeText, isLoading, 
    openImageLibrary, openAudioLibrary
 }) => {
    const handleSelect = ( target, value ) => {
        onChangeText({ ...videoProdData, 
            [target]: value
        })   
    }
    const videoTypeOptions = [
        { text: 'Pseudovideo', value: 'Pseudovideo' },
        { text: 'Lyric Video', value: 'Lyric_Video' },
    ]
    return(
    <BaseBackground style={ styles.baseBackground }>
        { isLoading && <Loader /> }
        <Header hasBack={true} hasRight={false} />
        <ScrollView><View style={{ padding: 20 }}>
            <AppText size='bold' style={ styles.baseTitle }><Icon name='easel-outline' style={ styles.baseIcon } /> SERVIÇO DE PRODUÇÃO DE VIDEO</AppText>
            <View style={ styles.card } >
                <View style={ styles.cardBodyContainer }>
                    <AppSelector category={videoProdData.videoType} changeData={handleSelect} emptyLabel='Selecione...' label='Tipo de Video' optionText='text' optionValue='value' target='videoType' options={videoTypeOptions} />
                    <AppButton onPress={openImageLibrary} label='SUBIR CAPA' labelStyle={{ color: colors.darkgray }} containerStyle={{backgroundColor: colors.opaquegray, marginTop: 20,}} />
                    {
                        videoProdData.cover !== '' &&
                        <Image source={{ uri: videoProdData.cover }} style={{ width: '100%', aspectRatio: 1 }} />
                    }
                    <AppButton onPress={openAudioLibrary} label='SUBIR AUDIO' labelStyle={{ color: colors.darkgray }} containerStyle={{backgroundColor: colors.opaquegray, marginTop: 20,}} />
                    {
                        videoProdData.audio !== '' &&
                        <AppText size='bold'>{`Nome Temporal:\n`+videoProdData.audio.substring( videoProdData.audio.indexOf('DocumentPicker')+15 )}</AppText>
                    }
                    <AppField value={videoProdData.lyric} inputProps={{ multiline: true, numberOfLines: 3 }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Letra da Música'} onChangeText={text => onChangeText({ ...videoProdData, lyric: text }) } />
                    <AppField value={videoProdData.description} inputProps={{ multiline: true, numberOfLines: 3 }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Como gostaria que fosse o lyric video (com links)'} onChangeText={text => onChangeText({ ...videoProdData, description: text }) } />
                    <AppButton containerStyle={{ backgroundColor: colors.secondary }} labelStyle={{ color: colors.white }} onPress={handleSaveTicket} label={'CRIAR TICKET'} />
                </View>
            </View>
        </View></ScrollView>
    </BaseBackground>
)}

export default HireVideoProdView;