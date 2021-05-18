import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import colors from '../config/colors';

interface Props {
    title: string;
    onPress: () => void;
    color: keyof typeof colors;
}

function AppButton({ 
    title, 
    onPress,
    color,
}: Props) {
    return (
        <TouchableOpacity 
            style={[
                styles.button,
                { backgroundColor: colors[color]},
            ]}
            onPress={onPress}
        >
            <Text
                style={styles.text}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default AppButton;