import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator} from 'react-navigation';
import FirstView from './FirstView';
import GitHubAPI from './SecondView';

const AppNavigator = TabNavigator({
    Home : {screen: FirstView},
    Settings: {screen: GitHubAPI}
});

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator/>
    );
  }
}

