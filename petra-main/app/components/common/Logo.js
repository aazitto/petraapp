import React from 'react';
import { Image, View } from 'react-native';

const Logo = ({ style, imageStyle }) => (
    <View style={[{ alignItems: 'center' }, style]}>
        <Image style={[{ height: 80, width: 240 }, imageStyle]} source={ require('../../assets/images/logoforartists.png') } />
    </View>
)

export default Logo;