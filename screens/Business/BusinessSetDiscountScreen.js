import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { firebase } from '../../config';


export default function BusinessSetDiscountScreen() {
    const [discount, setDiscount] = useState(0);
    const discountsRef = firebase.firestore().collection('discounts');

    const addDiscount = () => {
        if (discount && discount != 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            
            const data = {
                createdAt: timestamp,
                name: 'dummy restaurant name',
                discount: discount
            };

            discountsRef
                .add(data)
                .then(() => {
                    setDiscount('');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <View style={styles.container}>
            <Text>Set discount: </Text>
            <TextInput 
                keyboardType='numeric'
                maxLength={3}
                onChangeText={setDiscount}
                value={discount}
                placeholder="Set discount" 
            />
            <Button
                title="Send"
                onPress={addDiscount}
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
