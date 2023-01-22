import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Button, Text } from 'react-native';
import { firebase } from '../config';


export default function LoginScreen({ navigation }) {
    const [restaurants, setRestaurants] = useState([]);
    const restaurantsRef = firebase.firestore().collection('restaurants');

    useEffect(() => {
        async function fetchData() {
            restaurantsRef.onSnapshot(
                (querySnapshot) => {
                    const data = []
                    querySnapshot.forEach((doc) => {
                        const { name, discount } = doc.data();
                        data.push({
                            id: doc.id, 
                            name, 
                            discount
                        })
                    })
                    setRestaurants(data);
                }
            )
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Button
                title="Business Login"
                onPress={() => navigation.navigate('BusinessHome')}
            />
            <Button
                title="Diner Login"
                onPress={() => navigation.navigate('DinerHome')}
            />
            <FlatList 
                data={restaurants}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.discount}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
