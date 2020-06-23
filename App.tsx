import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as expoBattery from 'expo-battery';

import Battery from './components/Battery';

export default function App() {
    const [batteryPercentage, setBatteryPercentage] = useState(0);
    const [batteryState, setBatteryState] = useState(0);

	useEffect(() => {
		async function subscribe() {
            const batteryLevel = await expoBattery.getBatteryLevelAsync();
            setBatteryPercentage(Math.round(batteryLevel * 100));

            const batterySta = await expoBattery.getBatteryStateAsync();
            setBatteryState(batterySta)

            expoBattery.addBatteryStateListener((res) => {
                setBatteryState(res.batteryState);
            })
		}
		subscribe();
    }, []);
    
	return (
		<View style={styles.container}>
			<Battery nb={batteryPercentage} batteryState={batteryState}></Battery>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		resizeMode: 'cover',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
