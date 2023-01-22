

import { View, Text, StyleSheet, Dimensions, Image, ScrollView, useWindowDimensions } from "react-native"
import React, {useState} from 'react'
import Animated, {useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate} from 'react-native-reanimated'


const DinerCarousel = ({data}) => {
    const [newData] = useState([
        {key: 'spacer-left'}, 
        ...data, 
        {key:'spacer-right'},
    ]);
    const {width} = useWindowDimensions();
    
    const SIZE = width*0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    }

    )

    return ( 
        <Animated.ScrollView horizontal
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate="fast"
        onScroll={onScroll}>
            {newData.map((item, index) => {
                const style = useAnimatedStyle(() =>{
                    const scale = interpolate(
                        x.value, 
                        [(index-2)*SIZE, (index-1)*SIZE, index*SIZE ],
                        [0.8, 1, 0.8],
                    );
                    return {
                        transform: [{scale}]
                    }
                })
                if (!item.image){
                    return <View style = {{width: SPACER}} key={index}/>;
                }
                return (
                    <View style={{width: SIZE}} key={index}>
                        <Animated.View style={[styles.imagecontainer, style]}>
                            <Image source={item.image} style={styles.image}/>
                        </Animated.View>
                    </View>
                );
                })}
        </Animated.ScrollView>
    );
};

export default DinerCarousel;

const styles = StyleSheet.create(
    {
    imagecontainer:{
        borderRadius: 34, 
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 'undefined',
        aspectRatio: 1,

    },
    }
);
