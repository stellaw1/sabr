import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../config';
import { Button } from '@rneui/themed';


export default function SignupScreen({ navigation }) {
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
                })
        }
    }

    return (
        <View style={styles.container}>
            <Button
                title="Business Signup"
                onPress={() => navigation.navigate('BusinessHome')}
            />
            <Button
                title="Diner Signup"
                onPress={() => navigation.navigate('DinerHome')}
            />
            <TextInput
                placeholder={'Email'}
                onChangeText={(text) => setUserEmail(text)}
                value={userEmail}
            />
            <TextInput
                placeholder={'Password'}
                onChangeText={(text) => setUserPassword(text)}
                value={userPassword}
            />
            <TouchableOpacity onPress={addUser}>
                <Text>Add</Text>
            </TouchableOpacity>
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
