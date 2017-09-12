/**
 * Created by elizavetaliquidblox on 01/09/17.
 */
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class TextForm extends React.Component {
    state = {text: "react"};

    onChange = (text) => this.setState({text});
    onSubmit = () => this.props.onSubmit(this.state.text);

    render = () =>
        <View style={{backgroundColor: '#faf'}}>
            <TextInput onChangeText={this.onChange}
                       value={this.state.text}
                       style={{height:40}}
            />
            <Button onPress={this.onSubmit}
                    title="Submit"
            />
        </View>
}
export default TextForm;