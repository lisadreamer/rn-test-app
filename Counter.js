/**
 * Created by elizavetaliquidblox on 29/08/17.
 */
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

class Counter extends React.Component{
    state = {value:0};

    componentDidMount() {
        this.timer = setInterval(this.increment,1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    increment = () => {
        this.setState({value: this.state.value + 1})
    }

    decrement = () => {
        this.setState({value: this.state.value - 1})
    }

    render(){
        return (
            <View>
                <Text>{this.state.value}</Text>
                <Button title="+" onPress={this.increment}></Button>
                <Button title="-" onPress={this.decrement}></Button>
            </View>
        )
    }
}

export default Counter;
/**
 * Created by elizavetaliquidblox on 29/08/17.
 */

