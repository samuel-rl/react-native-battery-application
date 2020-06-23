import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Emoji extends React.Component<{nb: number}> {    
	render() {
        
        
		return (
			<View style={[styles.emoji, {height: this.props.nb/100*272},styles.happy]}>
				<View></View>
				<View></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	emoji: {
		width: 152,
        margin: 2,
        backgroundColor: 'yellow',
        position: "relative",
		borderRadius: 15,
	},
	happy: {},
});
