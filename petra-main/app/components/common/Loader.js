import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from '../../config/colors';

const Loader = ({ style, overlayStyle }) => (
    <View style={[styles.loader, style]}>
        <View style={[styles.overlay, overlayStyle]}></View>
        <ActivityIndicator animating={true} color={colors.primary} size={50} />
    </View>
)

const styles = StyleSheet.create({
    loader: {
        zIndex: 1000,
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        position: "absolute", 
        width: '100%', 
        height: '100%', 
        top: 0,
        left: 0,
    },
    overlay: {
        backgroundColor: colors.white,
        opacity: .8,
        width: '100%',
        height: '100%',
        position: "absolute",
        top: 0,
    }
})

export default Loader;