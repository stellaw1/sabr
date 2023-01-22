import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function BusinessSetDiscountScreen({ navigation }) {
    const [discount, setDiscount] = useState(0);

    const onChangeDiscount = (data) => {
        console.log(data);
        setDiscount(data);
    }

    return (
        <View style={styles.container}>
            <Text>Set discount: </Text>

            <Button
                title="Set discount"
                onPress={() => navigation.navigate('SetDiscount')}
            />
            <TextInput 
                keyboardType={'number-pad'} 
                onChangeText={onChangeDiscount}
                value={discount}
                placeholder="Set discount" 
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
