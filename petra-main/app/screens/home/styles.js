import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
    baseBackground: {
        padding: 0, 
        alignItems: 'stretch', 
        justifyContent: 'flex-start'
    },
    baseIcon: {
        fontSize: 18, 
        color: colors.primary
    },
    baseTitle: {
        color: colors.primary, 
        fontSize: 18, 
        marginBottom: 20
    },
    card: {
        backgroundColor: colors.white, 
        borderWidth: 1, 
        borderColor: colors.lightgray, 
        marginBottom: 20
    },
    cardTitleContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightgray
    },
    cardTitleText: {
        color: colors.black, 
        fontSize: 18
    },
    cardBodyContainer: {
        paddingVertical: 10, 
        paddingHorizontal: 20
    },
    cardLine: {
        flexDirection: 'row', 
        paddingBottom: 10, 
        justifyContent: 'space-between'
    },
    circleButton: {
        padding: 10, 
        margin: 0, 
        borderRadius: 50,
    },
    secondaryButton: {
        backgroundColor: colors.secondary,
    },
    subtitle: {
        fontSize: 16,
        color: colors.white
    },
    title: {
        paddingTop: 10,
        paddingBottom: 20,
        color: colors.white,
        textAlign: "center",
        fontSize: 20, 
    },
})