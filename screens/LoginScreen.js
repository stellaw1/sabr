import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
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
