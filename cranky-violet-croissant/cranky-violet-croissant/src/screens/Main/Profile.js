import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Header from '../../components/Header';
import { AuthContext } from '../../context/AuthContext';

const ProfileScreen = () => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Header title="Profile" />
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>John Doe</Text>
                <Button title="Sign Out" onPress={logout} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ProfileScreen;
