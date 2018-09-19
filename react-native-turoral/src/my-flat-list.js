import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default class MyFlatList extends Component {
    render() {
        return (
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        );
    }
}