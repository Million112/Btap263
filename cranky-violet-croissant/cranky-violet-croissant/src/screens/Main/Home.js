// src/screens/Main/Home.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ItemList from '../../components/ItemList';

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const topCategories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Fashion' },
        { id: 3, name: 'Home & Garden' },
    ];
    
    const popularItems = [
        { id: 4, name: 'iPhone 14' },
        { id: 5, name: 'Nike Shoes' },
        { id: 6, name: 'Gaming Chair' },
    ];
    
    const saleOffItems = [
        { id: 7, name: 'Smart TV -20%' },
        { id: 8, name: 'Headphones -15%' },
        { id: 9, name: 'Watches -30%' },
    ];

    return (
        <View style={styles.container}>
            <Header title="Home" />
            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
            <ItemList title="Top Categories" data={topCategories} />
            <ItemList title="Popular Items" data={popularItems} />
            <ItemList title="Sale-off Items" data={saleOffItems} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default HomeScreen;