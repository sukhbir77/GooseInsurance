import { View, Text, Image, ImageSourcePropType, SafeAreaView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/slicers/userSlicer';
import { getProducts } from '../../../redux/slicers/productSlicer';

import { GOOSE_LOGO_HOMESCREEN, GIFT_LOGO, LIFE_INSURANCE_LOGO } from '../../../utils/images';
import styles from "./styles";
import imageData from '../../../utils/DummyData';

const HomeScreen = () => {
    const user = useSelector(selectUser);
    const products = useSelector(getProducts);

    const getImageSource = (index: number) => {
        return imageData[index];
    }

    return (
        <SafeAreaView style={styles.body}>

            {/* Header With Goose & Rewards Logo */}
            <View style={styles.bodyUpperContainer}>
                <View style={styles.headerContainer}>
                    <Image source={GOOSE_LOGO_HOMESCREEN} style={styles.gooseLogoImage} />
                    <Image source={GIFT_LOGO} style={styles.rewardsLogo} />
                </View>

                {/* Greeting User */}
                <Text style={styles.textHeadline}>{`Hi ${user.name.split(" ")[0]}, what would you like to protect?`} </Text>

                {/* Category Container */}
                <View style={styles.categoryContainer}>
                    <Image source={LIFE_INSURANCE_LOGO} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Life & Health</Text>
                </View>
            </View>
            {/* Little Triangle Container */}
            <View style={styles.triangle}></View>

            {/* Sub Categories Container */}
            <View style={styles.bodyBottomContainer}>
                <View style={styles.bodyCategoriesContainer}>
                    {products.map((item, index) => {
                        const splitString = item.title.split(" ")[0] + "\n" + item.title.split(" ")[1];
                        const imageSource = getImageSource(index);

                        return (
                            // Individual Sub-Category Container
                            <View key={index} style={[styles.insuranceCategoriesContainer, styles.elevation, { marginRight: (index + 1) % 3 === 0 ? 0 : 20 }]}>
                                <Image source={imageSource} style={styles.insuranceCategoriesImage} />
                                <Text style={styles.insuranceCategoriesText}>{splitString}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen