// src/components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default SearchBar;
