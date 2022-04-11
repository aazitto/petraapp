import React, { useState } from 'react';
import { StyleSheet, View, Modal, ScrollView, Alert } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import AppText from './AppText';
import colors from '../../config/colors';

const AppSelector = ({ 
    containerStyle, 
    label, emptyLabel, labelStyle,
	options, optionValue, optionText, optionText1, optionText2,
	category, changeData, target,
}) => {
	const [ selectorShow, changeShow ] = useState(false)
	const handlePress = value => {
		changeShow(false)
		changeData(target, value)
	}
	const handleSelectorPress = () => {
		if( !!options.length ) {
			changeShow(true)
		}else{
			Alert.alert('Atenção', 'Este seletor não tem opções disponíveis. Se depende de uma seleção prévia, tente escolher outra.')
		}
	}
	return (
		<View>
			<Modal onRequestClose={ ()=>changeShow(false) } visible={selectorShow} onDismiss={()=>changeShow(false)} transparent={true} animationType={'fade'} >
				<TouchableRipple onPress={ ()=>changeShow(false) } style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<View style={styles.modalContent}>
					<ScrollView>
						{
							!!options.length && options.map( (item, index) => (
								<TouchableRipple key={`option-item-${index}`} onPress={ ()=>handlePress( item[optionValue] ) }>
									<AppText style={styles.option}>{optionText1 ? `${item[optionText1]} - ${item[optionText2]}` : item[optionText]}</AppText>
								</TouchableRipple>
							))
						}
					</ScrollView>
				</View>
				</TouchableRipple>
			</Modal>
            <AppText style={[styles.label,labelStyle]}>{label}</AppText>
			<View style={[ styles.container, containerStyle ]}>
				<TouchableRipple style={styles.pressable} borderless onPress={handleSelectorPress}>
					<View><AppText style={styles.selectedText}>
						{ (category === '' || category === undefined) ? emptyLabel : ( !!options.length ? options.find( item => item[optionValue] === category )[optionText] : emptyLabel ) }
					</AppText><Icon name='caret-down' style={styles.icon} /></View>
				</TouchableRipple>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	/*container: {
		backgroundColor: colors.opaquegray, 
		borderRadius: 30
	},*/
	icon: {
		position: 'absolute',
		color: colors.secondary,
		fontSize: 25,
		right: 0,
	},
    label: {
        paddingVertical: 10, 
        color: colors.lightGray
    },
	modalContent: {
		opacity: 1,
		paddingVertical: 20,
		borderRadius: 5,
		backgroundColor: colors.white, 
		margin: 40,
	},
	option: {
		padding: 20,
		paddingHorizontal: 20,
		paddingVertical: 5,
		fontSize: 18,
		color: colors.black,
	},
	pressable: {
		backgroundColor: colors.white,
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderColor: colors.darkgray,
		borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
	},
	selectedText: {
		color: colors.black,
		fontSize: 14
	}
})

export default AppSelector;