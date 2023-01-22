import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { firebase } from '../config';
import { Card, Input, Button } from '@rneui/themed';

export default function LoginScreen({ navigation }) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [users, setUsers] = useState([]);
    const usersRef = firebase.firestore().collection('users');

    useEffect(() => {
        async function fetchData() {
            usersRef.onSnapshot((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    const { email, password } = doc.data();
                    data.push({
                        id: doc.id,
                        email,
                        password
                    });
                });
                setUsers(data);
            });
        }
        fetchData();
    }, []);

    const validateLogin = () => {
        for (let i = 0; i < users.length; i++) {
            if (
                users[i].email == userEmail &&
                users[i].password == userPassword
            ) {
                return true;
            }
            return false;
        }
    };

    return (
        <View>
            <Card>
                <Text>Welcome to Sabr</Text>
                <Input
                    placeholder="E-mail"
                    autoComplete="false"
                    clearButtonMode="while-editing"
                    textContentType="username"
                    onChangeText={(text) => setUserEmail(text)}
                    value={userEmail}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    clearButtonMode="while-editing"
                    textContentType="password"
                    onChangeText={(text) => setUserPassword(text)}
                    value={userPassword}
                />

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        title="Login"
                        onPress={() => {
                            if (validateLogin()) {
                                navigation.navigate('BusinessHome');
                            } else {
                                alert('Invalid credentials. ');
                            }
                        }}
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
                data={users}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.discount}</Text>
                    </View>
                )}
            />
        </View>
    );
}
