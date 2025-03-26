// src/components/ItemList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ItemList = ({ title, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    item: {
        padding: 10,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ItemList;
