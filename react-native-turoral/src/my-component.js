import React, { Component } from 'react';
import { Text } from 'react-native';

export default class MyComponent extends Component {

    render() {
        return (
            <Text>Hello {this.props.text}</Text>
        )
    }
}