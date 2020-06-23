import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BatteryLevel extends React.Component<{ nb: number }> {
	render() {
		return (
			<View
				style={[
					styles.batteryLevel,
					{
						height: (this.props.nb / 100) * 272,
						backgroundColor: this.props.nb > 80 ? '#46cf73' : this.props.nb > 30 ? '#fccf00' : '#ff3c42',
					},
				]}
			>
				<View></View>
				<View></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	batteryLevel: {
		width: 152,
		margin: 2,
		borderRadius: 15,
		position: 'absolute',
		bottom: 0,
	},
});
