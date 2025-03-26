// src/screens/Auth/SignIn.js
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import IconButton from '../../components/IconButton';
import { AuthContext } from '../../context/AuthContext';

const SignInScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <CustomTextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <CustomTextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <IconButton title="Login" onPress={login} backgroundColor="#007BFF" />
            <IconButton title="Login with Google" onPress={() => {}} backgroundColor="#DB4437" />
            <IconButton title="Login with Facebook" onPress={() => {}} backgroundColor="#4267B2" />
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 10,
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});

export default SignInScreen;