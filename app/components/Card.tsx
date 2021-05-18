import React from 'react';
import { 
    View,
    StyleSheet,
    Image,
    ImageSourcePropType,
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

type CardProps = {
    title: string;
    subTitle: string;
    image: ImageSourcePropType;
};

function Card({
    title,
    subTitle,
    image
}:CardProps) {
    return (
        <View
            style={styles.card}
        >
            <Image
                style={styles.image}
                source={image} 
            />
            <View
                style={styles.detailsContainer}
            >
                <AppText
                    textStyle={styles.title}
                >
                    {title}
                </AppText>
                <AppText
                    textStyle={styles.subTitle}
                >
                    {subTitle}
                </AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 7,
    }
});

export default Card;