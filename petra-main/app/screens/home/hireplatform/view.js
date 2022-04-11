import React from 'react';
import { ScrollView, View } from 'react-native';
import { BaseBackground, Header, Loader } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';
import { styles } from '../styles';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const HirePlatformView = ({ platformsData, handleSaveTicket, onChangeText, isLoading }) => {
    return(
    <BaseBackground style={ styles.baseBackground }>
        { isLoading && <Loader /> }
        <Header hasBack={true} hasRight={false} />
        <ScrollView><View style={{ padding: 20 }}>
            <AppText size='bold' style={ styles.baseTitle }><Icon name='easel-outline' style={ styles.baseIcon } /> GESTÃO DE PLATAFORMAS DIGITAIS</AppText>
            <View style={ styles.card } >
                <View style={ styles.cardBodyContainer }>
                    <AppField value={platformsData.fullName} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Nome do Artista'} onChangeText={text => onChangeText({ ...platformsData, fullName: text }) } />
                    <AppField value={platformsData.currentProducts} inputProps={{ keyboardType:'number-pad' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Quantidade de Produtos já Lançados'} onChangeText={text => onChangeText({ ...platformsData, currentProducts: text }) } />
                    <AppField value={platformsData.pastPlatforms} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Onde já distribuiu o conteúdo'} onChangeText={text => onChangeText({ ...platformsData, pastPlatforms: text }) } />
                    <AppField value={platformsData.nextMusics} inputProps={{ keyboardType:'number-pad' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Quantidade de novos fonogramas nos próximos 12 meses.'} onChangeText={text => onChangeText({ ...platformsData, nextMusics: text }) } />
                    <AppField value={platformsData.linkYoutube} inputProps={{ keyboardType:'url' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Link Canal de Youtube'} onChangeText={text => onChangeText({ ...platformsData, linkYoutube: text }) } />
                    <AppField value={platformsData.linkInstagram} inputProps={{ keyboardType:'url' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Link Instagram'} onChangeText={text => onChangeText({ ...platformsData, linkInstagram: text }) } />
                    <AppField value={platformsData.linkSpotify} inputProps={{ keyboardType:'url' }} containerStyle={{ marginVertical: 5 }} labelStyle={{ paddingTop: 0 }} fieldStyle={{ paddingVertical: 5 }} label={'Link Perfil de Spotify'} onChangeText={text => onChangeText({ ...platformsData, linkSpotify: text }) } />
                    <AppButton containerStyle={{ backgroundColor: colors.secondary }} labelStyle={{ color: colors.white }} onPress={handleSaveTicket} label={'CRIAR TICKET'} />
                </View>
            </View>
        </View></ScrollView>
    </BaseBackground>
)}

export default HirePlatformView;