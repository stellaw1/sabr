import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Card } from '@rneui/themed';

export default function DinerPurchaseScreen({ navigation }) {
    return (
      <View>
        <Card>
          <Card.Title>THE ONLY RESTAURANT</Card.Title>
          <Text>Location: 123 UBC Way</Text>
          <Text>Discount: 10%</Text>
          <Text>Choose from the following bundles:</Text>
          <View style={{position:"relative",alignItems:"center",margin:20}}>
            <Button>
              $10
            </Button>
            <Button>
              $20
            </Button>
            <Button>
              $50
            </Button>
          </View>
         <Text >Save more with Sabr!</Text>
        </Card>
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
    searchbar:{
      backgroundColor: '#fff'
    }
});
