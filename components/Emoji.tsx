import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Emoji extends React.Component {
	render() {
		return (
			<View style={[styles.emoji, styles.happy]}>
				<View></View>
				<View></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	emoji: {
		width: 150,
		height: 150,
		borderRadius: 50,
        backgroundColor: 'yellow',
        position: "relative",
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 0,
        marginRight: 20
	},
	happy: {},
});
