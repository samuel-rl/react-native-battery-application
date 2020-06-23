import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as expoBattery from 'expo-battery';

import Battery from './components/Battery';

export default function App() {
    const [batteryPercentage, setBatteryPercentage] = useState(100);
    useEffect(() => {
        async function fetchBatteryLevel() {
            let nb = await expoBattery.getBatteryLevelAsync();
            setBatteryPercentage(Math.round(nb*100));
          }
          fetchBatteryLevel();
    }, []);
	return (
		<View style={styles.container}>
			<Battery nb={batteryPercentage}></Battery>
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
