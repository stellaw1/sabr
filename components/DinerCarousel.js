import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    interpolate
} from 'react-native-reanimated';

import { TouchableOpacity } from 'react-native';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const windowWidth = Dimensions.get('window').width;
const SIZE = windowWidth * 0.7;
const SPACER = (windowWidth - SIZE) / 2;

const DinerCarousel = ({ data, navigation }) => {
    const [newData] = useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' }
    ]);

    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
        }
    });

    return (
        <Animated.ScrollView
            horizontal
            bounces={false}
            scrollEventThrottle={16}
            snapToInterval={SIZE}
            decelerationRate="fast"
            onScroll={onScroll}
        >
            {newData.map((item, index) => {
                const style = useAnimatedStyle(() => {
                    const scale = interpolate(
                        x.value,
                        [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                        [0.8, 1, 0.8]
                    );
                    return {
                        transform: [{ scale }]
                    };
                });
                if (!item.image) {
                    return <View style={{ width: SPACER }} key={index} />;
                }
                return (
                    <View style={{ width: SIZE }} key={index}>
                        <AnimatedTouchable
                            onPress={() => navigation.navigate('DinerPurchase')}
                        >
                            <Animated.View
                                style={[styles.imagecontainer, style]}
                            >
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                />
                            </Animated.View>
                        </AnimatedTouchable>
                    </View>
                );
            })}
        </Animated.ScrollView>
    );
};

export default DinerCarousel;

const styles = StyleSheet.create({
    imagecontainer: {
        borderRadius: 34,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 'undefined',
        aspectRatio: 1
    }
});
