

import { View, Text, StyleSheet, Dimensions, Image, ScrollView, useWindowDimensions } from "react-native"
import React, {useState} from 'react'

const DinerCarousel = ({data}) => {
    const [newData] = useState([
        {key: 'spacer-left'}, 
        ...data, 
        {key:'spacer-right'},
    ]);
    const {width} = useWindowDimensions();
    
    const SIZE = width*0.7;
    const SPACER = (width - SIZE) / 2;
    return ( 
        <ScrollView horizontal
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate='fast'>
            {data.map((item, index) => {
                if (!item.image){
                    return <View style = {{width: SPACER}} key={index}/>;
                }
                return (
                    <View style={{width: SIZE}} key={index}>
                        <View style={styles.imagecontainer}>
                            <Image source={item.image} style={styles.image}/>
                        </View>
                    </View>
                );
                })}
        </ScrollView>
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
