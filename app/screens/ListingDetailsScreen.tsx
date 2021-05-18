import React from 'react';
import { 
    Image,
    StyleSheet,
    View,
} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

interface Props {

}
const ListingDetailsScreen: React.FC<Props> = (props) => {
    return (
        <View>
            <Image 
                style={styles.image}
                source={require('../assets/chair.jpg')}
            >
            </Image>
            <View
                style={styles.detailsContainer}
            >
                <AppText
                    textStyle={styles.title}
                >
                    Red jacket for sale
                </AppText>
                <AppText
                    textStyle={styles.price}
                >
                    $100
                </AppText>
            </View>
            <View
                style={styles.userContainer}
            >
                <ListItem
                    title='Rachel'
                    subTitle='5 listings'
                    image={require('../assets/0.jpg')}
                ></ListItem>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    }
});

export default ListingDetailsScreen;