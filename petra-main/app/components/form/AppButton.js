import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../config/colors';
import AppText from './AppText';

const AppButton = ({ style, onPress, label, containerStyle, labelStyle, disabled, children }) =>(
    <TouchableRipple
        disabled={disabled}
        onPress={onPress}
        rippleColor="rgba(0, 0, 0, .32)"
        style={[styles.button, containerStyle, { opacity: disabled ? 0.7 : 1 }]}
        borderless
        >
            {label ?
            <View style={style}>
                <AppText size='bolder' style={[styles.label, labelStyle]}>{label}</AppText>
            </View>:
            children}
    </TouchableRipple>    
)

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        marginVertical: 5,
    },
    label: {
        paddingVertical: 15,
        color: colors.white,
        fontSize: 15,
        textAlign: "center",
    }
})

export default AppButton;
