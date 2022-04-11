import React from 'react';
import { ScrollView, View } from 'react-native';
import { BaseBackground, Header, Loader } from '../../../components/common';
import { AppButton, AppField, AppSelector, AppText } from '../../../components/form';
import { styles } from '../styles';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const HireReleaseView = ({ releaseData, handleSaveTicket, onChangeText, isLoading }) => {
    const handleSelect = ( target, value ) => {
        onChangeText({ ...releaseData, 
            [target]: value
        })   
    }
    const releaseTypeOptions = [
        { text: 'Single', value: 'Single' },
        { text: 'EP', value: 'EP' },
        { text: 'Álbum', value: 'Álbum' }
    ]
    const discCompanyOptions = [
        { text: 'Independente', value: 'Independente' },
        { text: 'Gravadora', value: 'Gravadora' },
    ]
    const finalCompanyOptions = [
        { text: 'Conosco (PETRA)', value: 'Conosco_(PETRA)' },
        { text: 'Ja Possuo Distribuidora', value: 'Ja_Possuo_Distribuidora' },
    ]
    const planOptions = [
        { text: 'Plano Light', value: 'Plano_Light' },
        { text: 'Plano Full', value: 'Plano_Full' },
    ]
    return(
    <BaseBackground style={ styles.baseBackground }>
        { isLoading && <Loader /> }
        <Header hasBack={true} hasRight={false} />
        <ScrollView><View style={{ padding: 20 }}>
            <AppText size='bold' style={ styles.baseTitle }><Icon name='easel-outline' style={ styles.baseIcon } /> GESTÃO DE PLATAFORMAS DIGITAIS</AppText>
            <View style={ styles.card } >
                <View style={ styles.cardBodyContainer }>
                    <AppField value={releaseData.fullName} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Nome do Artista'} onChangeText={text => onChangeText({ ...releaseData, fullName: text }) } />
                    <AppSelector category={releaseData.releaseType} changeData={handleSelect} emptyLabel='Selecione...' label='Tipo de Lançamento' optionText='text' optionValue='value' target='releaseType' options={releaseTypeOptions} />
                    <AppSelector category={releaseData.discCompany} changeData={handleSelect} emptyLabel='Selecione...' label='Companhia de Disco' optionText='text' optionValue='value' target='discCompany' options={discCompanyOptions} />
                    <AppSelector category={releaseData.finalCompany} changeData={handleSelect} emptyLabel='Selecione...' label='Vai ditribuir' optionText='text' optionValue='value' target='finalCompany' options={finalCompanyOptions} />
                    <AppField value={releaseData.linkYoutube} inputProps={{ keyboardType:'url' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Link Canal de Youtube'} onChangeText={text => onChangeText({ ...releaseData, linkYoutube: text }) } />
                    <AppField value={releaseData.linkInstagram} inputProps={{ keyboardType:'url' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Link Instagram'} onChangeText={text => onChangeText({ ...releaseData, linkInstagram: text }) } />
                    <AppField value={releaseData.linkSpotify} inputProps={{ keyboardType:'url' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Link Perfil de Spotify'} onChangeText={text => onChangeText({ ...releaseData, linkSpotify: text }) } />
                    <AppField value={releaseData.pastPlatforms} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Onde já distribuiu o conteúdo'} onChangeText={text => onChangeText({ ...releaseData, pastPlatforms: text }) } />
                    <AppSelector category={releaseData.plan} changeData={handleSelect} emptyLabel='Selecione...' label='Qual plano contratar?' optionText='text' optionValue='value' target='plan' options={planOptions} />
                    <AppButton containerStyle={{ backgroundColor: colors.secondary }} labelStyle={{ color: colors.white }} onPress={handleSaveTicket} label={'CRIAR TICKET'} />
                </View>
            </View>
        </View></ScrollView>
    </BaseBackground>
)}

export default HireReleaseView;