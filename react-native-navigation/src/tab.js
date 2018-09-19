import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './home';
import Demo2 from './demo2';

const NavigatorTab = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            showIcon: true,
        },
    },
    Demo2: {
        screen: Demo2,
        navigationOptions: {
            tabBarLabel: 'Demo',
            showIcon: true,
        },
    },
};

const TabOptions = {
    animationEnabled: true,
    tabBarOptions: {
        indicatorStyle: { height: 0 },
        activeTintColor: '#0097a7',
        inactiveTintColor: 'gray',
        style: {
            borderTopColor: '#ebebeb',
            borderTopWidth: 1,
            backgroundColor: '#ffffff',
            // height: Dimensions.get('window').height * 0.08,
        },
    },
};

export default createBottomTabNavigator(NavigatorTab, TabOptions);
