import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        if (this.props.timeAction == 'Reset') {
            this.state = {
                time: 0
            }
        }
    }

    render() {
        return (
            <View style={styles.timer}>
                <Text style={{fontWeight: 'bold', fontSize: 25, color: '#ffffff'}}>{this.state.time}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  timer: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#7fff00'
  }
});