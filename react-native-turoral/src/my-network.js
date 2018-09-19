import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MyNetwork extends Component {

    state = {
        data: ''
    };

    async componentDidMount() {
        const res = await fetch('http://ec2-54-222-217-237.cn-north-1.compute.amazonaws.com.cn:12800/api/v0/cat/Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8')
        const json = await res.json();
        console.log(json);
        this.setState({data: json})
    }

    render() {
        return (
            <View>
                <Text></Text>
            </View>
        );
    }
}
