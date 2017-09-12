/**
 * Created by elizavetaliquidblox on 01/09/17.
 */
import React, { Component } from 'react';
import TextForm from './TextForm';
import { View, FlatList, Text } from 'react-native';

class RepositoryList extends React.Component{

    keyExtractor = (item) => item.id;
    renderItem = ({ item }) =>
        <View style={{ padding: 16 }}>
            <Text>{ item.full_name }</Text>
            <Text>{ item.url }</Text>
        </View>;

    render = () =>

            <FlatList data={this.props.data.items}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}></FlatList>

}

export default RepositoryList;