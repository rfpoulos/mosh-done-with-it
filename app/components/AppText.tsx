import React from 'react';
import { 
    Text, 
    StyleSheet,
    Platform,
} from 'react-native'

function AppText({ children }: { children: string}) {
    return (
        <Text
            style={styles.text}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
});

export default AppText;