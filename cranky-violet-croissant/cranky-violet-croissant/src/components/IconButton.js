// src/components/IconButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IconButton = ({ title, onPress, backgroundColor }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default IconButton;
