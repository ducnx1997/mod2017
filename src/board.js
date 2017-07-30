import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Cell from './cell';

export default class Board extends Component {
	constructor(props) {
		super(props);
		index = [];

		expected = 0;
	}


	_generatePermu = () => {
		index = [];
		for (let i = 1; i <= 16; i++) index.push(i);
		for (let i = 0; i < 16; i++) {
			let j = Math.floor(Math.random() * 16);
			let foo = index[i];
			index[i] = index[j]; index[j] = foo;
		}
		return index;
	}

	_onPressCell = (index) => {
		if (index != this.expected) {
			this.expected = 0;
			this.props.endgame();
			return false;
		}
		if (index == this.expected) {
			this.expected++;
		}
		if (this.expected == this.props.level) {
			this.expected = 0;
			this.props.endgame();
		}
		return true;
	}

	_getExpected = () => {
		return this.expected;
	}

	render() {
		let size = Dimensions.get('window');
		if (this.props.buttonTitle != 'Start') {
			let n = this.props.level;
			index = this.index;
			return (
				<View style={[styles.board, {width: size.width, height: size.width}]}>
					<View style={{flex: 1}}>
						<Cell key={index[0]} number={index[0]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[1]} number={index[1]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[2]} number={index[2]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[3]} number={index[3]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
					</View>
					<View style={{flex: 1}}>
						<Cell key={index[4]} number={index[4]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[5]} number={index[5]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[6]} number={index[6]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[7]} number={index[7]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
					</View>
					<View style={{flex: 1}}>
						<Cell key={index[8]} number={index[8]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[9]} number={index[9]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[10]} number={index[10]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[11]} number={index[11]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
					</View>
					<View style={{flex: 1}}>
						<Cell key={index[12]} number={index[12]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[13]} number={index[13]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[14]} number={index[14]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
						<Cell key={index[15]} number={index[15]} level={n} expected={this._getExpected.bind(this)} onPress={this._onPressCell.bind(this)}/>
					</View>
				</View>
			);
		}
		if (this.props.buttonTitle == 'Start') {
			this.index = this._generatePermu();
			this.expected = 1;
		}
		return <View style={[styles.board, {width: size.width, height: size.width}]}></View>;
	}

}



const styles = StyleSheet.create({
	board: {	
		alignItems: 'center',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center'
	}
});