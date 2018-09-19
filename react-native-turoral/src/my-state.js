import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MyState extends Component {

    state = {
        message: '',
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                message: 'Hello State!'
            });
        }, 1000)
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.message}
                </Text>
            </View>
        );
    }
}
