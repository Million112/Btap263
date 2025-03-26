// src/router/index.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext, AuthProvider } from '../context/AuthContext';

import SignInScreen from '../screens/Auth/SignIn';
import HomeScreen from '../screens/Main/Home';
import ProfileScreen from '../screens/Main/Profile'; 

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const AuthStackNavigator = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
);

const MainTabNavigator = () => (
    <MainTab.Navigator>
        <MainTab.Screen name="Home" component={HomeScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
);

const RootNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {isLoggedIn ? <MainTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
};

const App = () => (
    <AuthProvider>
        <RootNavigator />
    </AuthProvider>
);

export default App;
