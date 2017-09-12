/**
 * Created by elizavetaliquidblox on 30/08/17.
 */
import React, { Component } from 'react';
import Counter from './Counter';
import { View, Button } from 'react-native';

class CounterContainer extends Component{
    state = { numCounters: 3 };

    increment = () => {
        this.setState({numCounters: this.state.numCounters + 1})
    }
    decrement = () => {
        this.setState({numCounters: this.state.numCounters - 1})
    }

    renderCounter = (_, index) =>
        <Counter key={index} />;

    renderCounters = () =>
        [...Array(this.state.numCounters)]
            .map(this.renderCounter);

    render(){
        return (
            <View>
                <View style={{flex: 1, backgroundColor: '#ffa'}}>
                { this.renderCounters() }
                </View>
                <Button title="add counter" style={{flex: 1, backgroundColor: '#ffa'}} onPress={this.increment}></Button>
                <Button title="remove counter" style={{flex: 1, backgroundColor: '#ffa'}} onPress={this.decrement}></Button>
            </View>
        )
    }
}

export default CounterContainer