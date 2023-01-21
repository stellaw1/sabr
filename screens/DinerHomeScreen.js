import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DinerHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Diner Home</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

