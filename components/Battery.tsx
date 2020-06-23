import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Battery extends React.Component {
	render() {
		return (
			<View style={[styles.container]}>
				<View style={[styles.topBattery]}></View>
				<View style={[styles.battery]}></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	battery: {
		width: 160,
		height: 280,
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 15,
    },
    topBattery:{
        width: 75,
        height: 13,
        backgroundColor: 'black',
        marginBottom: 3,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    container: {
        alignItems: 'center'
    }
});
