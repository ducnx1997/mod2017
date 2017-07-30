import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/main';

class ViewColoredBoxesWithText extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', padding: 0, backgroundColor: 'yellow'}}>
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Main />
      //<ViewColoredBoxesWithText/>
    );
  }
}

