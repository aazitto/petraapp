import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BaseBackground = ({ children, source, style, imageStyle }) => (
    <ImageBackground source={ source || require('../../assets/images/backgroundblurred.png') } style={ [styles.background, style] } imageStyle={imageStyle} >
        {children}
    </ImageBackground>
)

const styles = StyleSheet.create({
    background: {
        padding: 30,
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default BaseBackground;