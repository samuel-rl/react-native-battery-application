import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Emoji extends React.Component<{ nb: number }> {
	render() {
		return (
			<View
				style={[
					styles.emoji,
					{
						height: (this.props.nb / 100) * 272,
						backgroundColor: this.props.nb > 80 ? '#46cf73' : this.props.nb > 30 ? '#fccf00' : '#ff3c42',
					},
					styles.happy,
				]}
			>
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
		borderRadius: 15,
		position: 'absolute',
		bottom: 0,
	},
	happy: {},
});
