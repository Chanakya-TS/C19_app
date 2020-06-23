import React from 'react';
import { Text, View } from 'react-native'
import { Circle } from 'react-native-maps'
export default function DisplayGeoFences({ regions }) {
    return(
        regions.map((region) => (
            <Circle
                center={{latitude: region.latitude, longitude: region.longitude}}
                radius={100000}
                strokeColor='red'
                fillColor={'rgba(249, 0, 0, 0.35)'}
            />
        ))
    )
}