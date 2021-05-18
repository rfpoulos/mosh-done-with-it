import React, { ReactElement } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

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
                <Text style={styles.tagline}>
                    Sell What You Don't Need
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Login"
                    color="primary"
                >                
                </AppButton>
                <AppButton
                    title="Register"
                    color="secondary"
                >                
                </AppButton>
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
    buttonsContainer: {
        padding: 20,
        width: '100%',
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
    tagline: {
        fontSize: 25,
        fontWeight: '600'
    }
});

export default WelcomeScreen;