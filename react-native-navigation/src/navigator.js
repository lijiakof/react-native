import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Tab from './tab';
import Home from './home';
import Demo from './demo';

const NavigationRouteConfigMap = {
    Tab: {
        screen: Tab,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Demo: {
        screen: Demo,
        navigationOptions: {
            title: 'Demo'
        },
    },
};

const StackNavigatorConfig = {
    initialRouteName: 'Tab',
};

export default createStackNavigator(NavigationRouteConfigMap, StackNavigatorConfig);