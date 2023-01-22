import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

import Logo from '../components/Logo';

export default function WelcomScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo />
            <Button
                title="Business Login"
                onPress={() => navigation.navigate('BusinessLogin')}
            />
            <Button
                title="Diner Login"
                onPress={() => navigation.navigate('DinerLogin')}
            />
            <Button
                title="Signup"
                onPress={() => navigation.navigate('Signup')}
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
