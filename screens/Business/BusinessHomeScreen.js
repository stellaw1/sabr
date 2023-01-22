import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function BusinessHomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome to Business Home</Text>

            <Button
                title="Set discount"
                onPress={() => navigation.navigate('SetDiscount')}
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
