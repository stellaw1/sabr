import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { Button, Card } from '@rneui/themed';

export default function DinerWalletScreen({ navigation }) {
    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <Card>
                    <Card.Title>THE ONLY RESTAURANT</Card.Title>
                    <Text>Location: 123 UBC Way</Text>
                    <Text>Discount: 10%</Text>
                    <View
                        style={{
                            position: 'relative',
                            alignItems: 'center',
                            margin: 20
                        }}
                    >
                        <Button>$43</Button>
                    </View>
                </Card>
                <Card>
                    <Card.Title>THE SECOND RESTAURANT</Card.Title>
                    <Text>Location: 69 UBC Way</Text>
                    <Text>Discount: 15%</Text>
                    <View
                        style={{
                            position: 'relative',
                            alignItems: 'center',
                            margin: 20
                        }}
                    >
                        <Button>$5</Button>
                    </View>
                </Card>
                <Card>
                    <Card.Title>THE FAST RESTAURANT</Card.Title>
                    <Text>Location: 520 UBC Way</Text>
                    <Text>Discount: 5%</Text>
                    <View
                        style={{
                            position: 'relative',
                            alignItems: 'center',
                            margin: 20
                        }}
                    >
                        <Button>$30</Button>
                    </View>
                </Card>
            </ScrollView>
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
