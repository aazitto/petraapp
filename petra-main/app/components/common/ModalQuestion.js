import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { AppButton, AppText } from '../../components/form';
import colors from "../../config/colors";

const ModalQuestion = ({ content, visible, onDismiss, onPressYes }) => (
    <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={ styles.container }>
        <View style={styles.title}>
            <AppText size='bold' style={styles.titleText}>CONFIRM ACTION</AppText>
        </View>
        <View style={styles.content}>
            <AppText style={{fontSize: 16}}>{content}</AppText>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20 }}>
            <AppButton onPress={onPressYes} containerStyle={{ width: '40%' }} style={{ backgroundColor: colors.green }} label='Yes' />
            <AppButton onPress={onDismiss} containerStyle={{ width: '40%' }} style={{ backgroundColor: colors.primary }} label='No' />
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
        padding: 15,
        backgroundColor: colors.secondary
    },
    titleText: {
        fontSize: 18,
        color: colors.white
    }
})

export default ModalQuestion;