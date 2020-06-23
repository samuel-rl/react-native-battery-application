import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Emoji from './Emoji';

export default class Battery extends React.Component<{nb: number}> {
	render() {
		return (
			<View style={[styles.container]}>
                <Text>{this.props.nb}</Text>
				<View style={[styles.topBattery]}></View>
				<View style={[styles.battery]}>
                    <Emoji nb={this.props.nb}></Emoji>
                </View>
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
