import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

interface Props {
    
}
const Screen: React.FC<Props> = ({
    children
}) => {
    return (
        <SafeAreaView
            style={styles.screen}
        >
           {children} 
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    },
});

export default Screen;