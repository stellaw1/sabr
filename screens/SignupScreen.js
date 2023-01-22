import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { firebase } from '../config';
import { Card, Input, Button } from '@rneui/themed';

export default function SignupScreen({ navigation }) {
    const [isBusinessAccount, setIsBusinessAccount] = React.useState(false);

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const usersRef = firebase.firestore().collection('users');
    const restaurantsRef = firebase.firestore().collection('restaurants');

    const addUser = () => {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            createdAt: timestamp,
            name: userName,
            email: userEmail,
            password: userPassword
        };
        let ref = isBusinessAccount ? restaurantsRef : usersRef;
        ref.add(data)
            .then(() => {
                setUserName('');
                setUserEmail('');
                setUserPassword('');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toggleSwitch = () => {
        setIsBusinessAccount(!isBusinessAccount);
    };

    return (
        <View>
            <Card>
                {isBusinessAccount ? (
                    <Text>
                        Register your restuarant on Sabr to post discounts and
                        promote business!
                    </Text>
                ) : (
                    <Text>
                        Join sabr to purchase restaurant credits at a discount!
                    </Text>
                )}

                <Input
                    placeholder="Name"
                    autoComplete="false"
                    clearButtonMode="while-editing"
                    textContentType="username"
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                />
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
                        title="Sign Up"
                        onPress={() => {
                            addUser();
                            if (isBusinessAccount) {
                                navigation.navigate('BusinessLogin');
                            } else {
                                navigation.navigate('DinerLogin');
                            }
                        }}
                    />
                    <View>
                        <Text>Business account</Text>
                        <Switch
                            value={isBusinessAccount}
                            onChange={toggleSwitch}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
}
