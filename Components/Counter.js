import React, { Component } from "react";
import {
    View,
    Text,
    Button,
} from "react-native";
import PropTypes from 'prop-types';

export default class Counter extends Component {
    state = {
        counter: 0
    };

    _incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    _decrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={this._decrementCounter} title={"-"} color={'gray'} />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17 }}>{this.state.counter}</Text>
                </View>
                <Button onPress={this._incrementCounter} title={"+"} color={'gray'} />
            </View>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number,
};



