import React from 'react';
import { Text, View } from 'react-native'
import { Circle } from 'react-native-maps'
export default function DisplayGeoFences({ regions }) {
    return(
        regions.map((region) => (
            <Circle
                key={region.latitude+region.longitude}
                center={{
                    latitude: region.latitude,
                    longitude: region.longitude
                }}
                radius={region.radius}
                strokeColor='red'
                fillColor={'rgba(249, 0, 0, 0.35)'}
            />
        ))
    )
}