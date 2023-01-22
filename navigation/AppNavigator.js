import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BusinessHomeScreen from '../screens/Business/BusinessHomeScreen';
import BusinessSetDiscountScreen from '../screens/Business/BusinessSetDiscountScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DinerHomeScreen from '../screens/Diner/DinerHomeScreen';
import DinerPurchaseScreen from '../screens/Diner/DinerPurchaseScreen';
import DinerWalletScreen from '../screens/Diner/DinerWalletScreen';

import { ThemeProvider, createTheme } from '@rneui/themed';

const SabrTheme = createTheme({
    components: {
        Button: {
            type: 'outline',
            radius: 40,
            buttonStyle: { width: 150 },
            containerStyle: { margin: 5 }
        }
    }
});

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
    return (
        <ThemeProvider theme={SabrTheme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen
                        name="BusinessHome"
                        component={BusinessHomeScreen}
                    />
                    <Stack.Screen
                        name="SetDiscount"
                        component={BusinessSetDiscountScreen}
                    />
                    <Stack.Screen
                        name="DinerHome"
                        component={DinerHomeScreen}
                    />
                    <Stack.Screen
                        name="DinerPurchase"
                        component={DinerPurchaseScreen}
                    />
                    <Stack.Screen
                        name="DinerWallet"
                        component={DinerWalletScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};
