import React, { useState, useEffect } from 'react';
import { FlatList, View, Button, Text } from 'react-native';
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
        <View>
            <Card>
            <Text>
                Welcome to Sabr
            </Text>
            <Input placeholder="E-mail" autoComplete='false'clearButtonMode='while-editing' textContentType='username'/>
            <Input placeholder="Password" secureTextEntry={true} clearButtonMode='while-editing' textContentType='password'/>
            
            <View style={{ flexDirection: "row" }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Login')}
            />
            </View>
            
            </Card>



            {/* this is for testing purposes only */}
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
};
