/**
 * Created by elizavetaliquidblox on 01/09/17.
 */
import React, { Component } from 'react';
import TextForm from './TextForm';
import RepositoryList from './RepositoryList';
import { View, Text } from 'react-native';

class GitHubAPI extends React.Component {
    state = {data:{}};

    componentDidMount(){
        let url = 'https://api.github.com/search/repositories?q=react';
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({data}))
    }

    render = () =>

    <View>
        <Text>lollll</Text>
        <TextForm onSubmit={(lol) => fetch('https://api.github.com/search/repositories?q=' + lol)
            .then((response) => response.json())
            .then((data) => this.setState({data}))}/>
        <RepositoryList data={this.state.data}/>
    </View>
}

export default GitHubAPI;