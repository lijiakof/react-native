import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class MyScroll extends Component {

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 96 }}>Large Word</Text>
                <Text style={{ fontSize: 96 }}>Big World</Text>
                <Text style={{ fontSize: 96 }}>Great World</Text>
            </ScrollView>
        );
    }
}
