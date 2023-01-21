import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from 'react-native-dynamic-search-bar';

export default function DinerHomeScreen({ navigation }) {
    return (
        <View>
            <SearchBar
                placeholder="Search here"
                onPress={() => alert('onPress')}
                onChangeText={(text) => console.log(text)}
            />

            <View style={styles.container}>
                <Text>Welcome to Diner Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar: {
        backgroundColor: '#fff'
    }
});
