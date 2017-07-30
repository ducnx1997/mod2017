import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: '#5f9ea0',
			accessible: false
		}

		setTimeout(() => {
			this.setState(() => {
				return {
					color: '#5f9ea0',
					accessible: true
				}
			})
		}, 3000)
	}

	_onPressCell = () => {
		if (this.state.color != '#5f9ea0') return;
		if (this.props.expected() == 0) {
			this.setState((prevState) => {
				return {
					color: prevState.color,
					accessible: false
				}
			})
			return;
		}
		this.setState((prevState) => {
			if (this.props.onPress(this.props.number))
				return {
					color: '#7fff00',
					accessible: false
				}
			return {
				color: 'red',
				accessible: false
			}
		})
	}

	render() {
		if (this.props.number < this.props.level)
			return(
				<TouchableOpacity style={[styles.cell, {backgroundColor: this.state.color}]} onPress={this._onPressCell} disabled={!this.state.accessible}>
					<Text style={styles.text}>{this.state.accessible? null : this.props.number}</Text>
				</TouchableOpacity>
			)

		return(
				<TouchableOpacity style={[styles.cell, {backgroundColor:'white'}]}>
					<Text style={styles.text}>{null}</Text>
				</TouchableOpacity>
			)
	}
}

const styles = StyleSheet.create({
	cell: {
		margin: 10,
		backgroundColor: '#5f9ea0',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#ffffff',
	}
});