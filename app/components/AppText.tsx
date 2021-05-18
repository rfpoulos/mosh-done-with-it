import React, { PropsWithChildren } from 'react';
import { 
    Text, 
    StyleSheet,
    Platform,
    TextStyle,
} from 'react-native'

interface Props {
    textStyle?: TextStyle
}

function AppText({ children, textStyle }: PropsWithChildren<Props>) {
    return (
        <Text
            style={[styles.text, textStyle]}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        }),
    }
});

export default AppText;