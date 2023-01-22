import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button, Card } from "@rneui/themed";

export default function LoginScreen({ navigation }) {
    return (
        <View>
            <Card>
            <Text>
                Welcome to Sabr
            </Text>
            <Input placeholder="E-mail" autoComplete='false'clearButtonMode='while-editing' textContentType='username'/>
            <Input placeholder="Password" secureTextEntry={true} clearButtonMode='while-editing' textContentType='password'/>
            
            <View style={{ flexDirection: "row" }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Login')}
            />
            </View>
            
            </Card>



            {/* this is for testing purposes only */}
            <Button
                title="Business Login"
                onPress={() => navigation.navigate('BusinessHome')}
            />
            <Button
                title="Diner Login"
                onPress={() => navigation.navigate('DinerHome')}
            />
            <Button
                title="Diner Purchase"
                onPress={() => navigation.navigate('DinerPurchase')}
            />
            <Button
                title="Diner Wallet"
                onPress={() => navigation.navigate('DinerWallet')}
            />
        </View>
    );
};
