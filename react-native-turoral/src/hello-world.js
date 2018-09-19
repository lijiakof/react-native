import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import MyComponent from './my-component';
import MyState from './my-state';
import MyInput from './my-input';
import MyScroll from './my-scroll';
import MyFlatList from './my-flat-list';
import MyNetwork from './my-network';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
};

export default class HelloWorld extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hello World!
                </Text>
                <MyComponent text="My Component"></MyComponent>
                <MyState></MyState>
                <MyInput></MyInput>
                <MyScroll style={{height: 100}}></MyScroll>
                <MyFlatList></MyFlatList>
                <MyNetwork></MyNetwork>
            </View>
        );
    }
}
