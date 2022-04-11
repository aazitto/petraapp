import React from 'react';
import { ScrollView, View } from 'react-native';
import { BaseBackground, Logo } from '../../../components/common';
import { AppButton, AppText } from '../../../components/form';
import colors from '../../../config/colors';
import { styles } from '../styles';

const TermsView = ({ navigation }) => (
    <BaseBackground style={{ justifyContent: 'flex-start' }}>
        <View style={styles.container}>
            <ScrollView>
                <Logo style={{ paddingBottom: 30 }} />
                <AppText size='bolder' style={styles.title}>Termos de Uso e Política de Privacidade</AppText>
                    <AppText size='bold' style={{ color: colors.white, fontSize: 16, textAlign: 'justify', lineHeight: 25 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </AppText>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                        <AppText onPress={ ()=>navigation.goBack() }  size='bold' style={[styles.subtitle, { textDecorationLine: 'underline' }]}>Voltar para autenticação</AppText>    
                    </View>
            </ScrollView>
        </View>
    </BaseBackground>
)

export default TermsView;