import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function WelcomScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome to sabr</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
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
