import React from 'react';
import { View, Text } from 'react-native';

export default class DemoScreen extends React.Component {
    state = {
        params: ''
    };
    componentDidMount() {
        this.setState({
            params: this.props.navigation.state.params ? this.props.navigation.state.params.test : ''
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Demo Screen</Text>
                <Text>{this.state.params}</Text>
            </View>
        );
    }
}