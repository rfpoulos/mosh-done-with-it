import React from 'react';
import { 
    Image,
    ImageSourcePropType,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

interface Props {
    image: ImageSourcePropType,
    title: string,
    subTitle: string,
}
const ListItem: React.FC<Props> = ({
    image,
    title,
    subTitle,
}) => {
    return (
        <TouchableOpacity>
            <View
                style={styles.container}
            >
                <Image 
                    style={styles.image}
                    source={image}
                />
                <View>
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
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 1,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: '500',
    }
});

export default ListItem;