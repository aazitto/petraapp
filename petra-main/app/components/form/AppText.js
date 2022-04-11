import React from 'react';
import { Text } from 'react-native';

const AppText = ({ children, style, onPress, size, textProps }) =>(
    <Text
        {...textProps} 
        onPress={onPress} 
        style={[style, { fontFamily: size === 'bold' ? 'RBold' : ( size === 'bolder' ? 'RBolder' : ( size === 'regular' ? 'RMedium' : 'RRegular' ) )} ]}
    >{children}</Text>
)
export default AppText;
