import React from 'react';
import { Text, View , StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Board from './board';
import Timer from './timer';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonTitle: 'Start',
      level: 12,
      timeAction: 'none'
    }
  }

  _onPressButton = () => {
    if (this.state.buttonTitle === '') return;
    this.setState((prevState) => {
      if (prevState.buttonTitle == 'Start') {
        return {
          level: prevState.level,
          buttonTitle: 'Running',
          timeAction: 'Start'
        }
      }
      if (prevState.buttonTitle == 'Again') {
        return {
          level: prevState.level,
          buttonTitle: 'Start',
          timeAction: 'Reset'
        }
      }
      return prevState;
    });
  }

  _endGame = () => {
    this.setState(prevState => {
      return {
        level: prevState.level,
        buttonTitle: 'Again',
        timeAction: 'none'
      }
    })
  }

  _changeLevel = () => {
    if (this.state.buttonTitle != 'Start') return;
    this.setState(prevState => {
      if (this.state.level == 16) return {
        level: 4,
        buttonTitle: prevState.buttonTitle,
        timeAction: prevState.timeAction
      }
      return {
        level: prevState.level + 4,
        buttonTitle: prevState.buttonTitle,
        timeAction: prevState.timeAction
      }
    })
  }

  _getLevel = () => {
    if (this.state.level == 4) return 'Easy';
    if (this.state.level == 8) return 'Normal';
    if (this.state.level == 12) return 'Hard';
    return 'Very hard';
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._changeLevel} style={[styles.levelButton]}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#ffffff'}}>{this._getLevel() + ' (' + this.state.level + ')'}</Text>
        </TouchableOpacity>
        {/* <Timer timeAction={this.state.timeAction}></Timer> */}
        <Board buttonTitle={this.state.buttonTitle} level={this.state.level + 1} endgame={this._endGame}></Board> 
        <TouchableOpacity onPress={this._onPressButton} style={[styles.button]}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#ffffff'}}>{this.state.buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  button: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#7fff00'
  },
  levelButton: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a52a2a'
  }
});