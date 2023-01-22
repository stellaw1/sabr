import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch
} from 'react-native';
import { firebase } from '../config';
import { Card, Input, Button } from '@rneui/themed';

export default function SignupScreen({ navigation }) {
    const [isBusinessAccount, setIsBusinessAccount] = React.useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const usersRef = firebase.firestore().collection('users');

    const addUser = () => {
        if (userEmail && userEmail.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                createdAt: timestamp,
                email: userEmail,
                password: userPassword
            };
            usersRef
                .add(data)
                .then(() => {
                    setUserEmail('');
                    setUserPassword('');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const toggleSwitch = () => {
        setIsBusinessAccount(!isBusinessAccount);
    }

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
                        title="Sign Up"
                        onPress={() => {
                            addUser();
                            navigation.navigate('Login');
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
