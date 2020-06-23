import React from 'react'
import DisplayUserLocationAndRZ from '../components/DisplayUserLocationAndRZ'
import { View } from 'react-native'
import globalStyles from '../styles/globalStyles'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import regions from '../regions/regions'

export default class LocationAndRZ extends React.Component {
    state = {
        mapRegion: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
        },
        hasLocationPermissions: false,
        locationResult: null,
      };
    componentDidMount() {
        this.getLocationAsync();
    }
    
    handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
    
    async getLocationAsync () {
        const { status, permissions } = await Permissions.askAsync(
          Permissions.LOCATION
        );
        if (status === 'granted') {
          this.setState({ hasLocationPermissions: true });
          let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
          // let location = await Location.getCurrentPositionAsync({});
          this.setState({ locationResult: JSON.stringify(location) });
          this.setState({
            mapRegion: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.002,
              longitudeDelta: 0.002,
            },
          });
        } else {
          alert('Location permission not granted');
        }
    };
    
    render() {
        return (
            <View style={globalStyles.container}>
                <DisplayUserLocationAndRZ 
                    mapRegion={this.state.mapRegion} 
                    latitude={this.state.mapRegion.latitude} 
                    longitude={this.state.mapRegion.longitude}
                    regions={regions}  
                />
            </View>
        );
    }
}
