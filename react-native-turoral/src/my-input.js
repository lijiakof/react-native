import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class MyInput extends Component {

    state = {
        text: '',
    };

    render() {
        return (
            <View>
                <TextInput onChangeText={(text) => this.setState({ text })}></TextInput>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}
