import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { AppText } from '../../components/form';
import colors from "../../config/colors";

const ModalPopUp = ({ type = '', title, visible, onDismiss }) => (
    <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={ styles.container }>
        <View style={[styles.title, { backgroundColor: type === 'error' ? '#7F0000' : '#007F00' }]}>
            <AppText size='bold' style={styles.titleText}>{type.toUpperCase()}</AppText>
        </View>
        <View style={styles.content}>
            <AppText>{title}</AppText>
        </View>
    </Modal></Portal>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        margin: 20
    },
    content: {
        padding: 20,
    },
    title: {
        padding: 10,
    },
    titleText: {
        color: colors.white
    }
})

export default ModalPopUp;