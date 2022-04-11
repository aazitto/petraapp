import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import { TextInputMask } from 'react-native-masked-text'

const AppMaskedField = ({ 
    type,
    labelStyle, fieldStyle, containerStyle,
    label, value, onChangeText,
    inputProps, labelProps,
    icon, placeholder
  }) =>(
    <View style={[styles.container, containerStyle]}>
        { label && <AppText style={[styles.label, labelStyle]} {...labelProps} >{label}</AppText> }
        <View>
          <TextInputMask type={type} style={[styles.field, icon && { paddingLeft: 45 } , fieldStyle]} {...inputProps} value={value} onChangeText={onChangeText} placeholder={placeholder} />
          {   icon && <Icon name={icon} style={styles.icon} />  }
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
      marginVertical: 10
    },
    field: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontFamily: 'RRegular',
      color: colors.darkgray,
      borderColor: colors.darkgray,
      borderWidth: 1,
    },
    icon: {
      position: 'absolute',
      top: 7,
      left: 13,
      fontSize: 25,
      color: colors.darkGray 
    },
    label: {
      paddingVertical: 10,
      color: colors.lightGray
    },
})

export default AppMaskedField;