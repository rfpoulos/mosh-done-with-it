import React, { ReactElement } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

interface Props {

};

function WelcomeScreen(props: Props): ReactElement {
    return (
        <ImageBackground 
            style={styles.background}
            source={
                require('../assets/background.jpg')
            }
        >
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text>
                    Sell What You Don't Need
                </Text>
            </View>
            <View
                style={styles.loginButton}
            >
            </View>
            <View
                style={styles.registerButton}
            >
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
});

export default WelcomeScreen;