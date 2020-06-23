import React, { Component } from 'react';
import LocationAndRZ from './screens/LocationAndRZ';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import regions from './regions/regions'
import { View, Text } from 'react-native';

export default class App extends Component{
  state = {
    mapRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
    },
    hasLocationPermissions: false,
    locationResult: null,
    location: null,
  };

componentDidMount = () => {
    this.getLocationAsync();
    Location.startGeofencingAsync("isUserInRZ", regions)
    
}

startTasks = () => {
  TaskManager.defineTask("isUserInRZ", ({ data: { eventType, region }, error }) => {
    if (error) {
      console.log("ERROR");
      return;
    }
    if (eventType === Location.GeofencingEventType.Enter) {
      console.log("You've entered region:", region);
    } else if (eventType === Location.GeofencingEventType.Exit) {
      console.log("You've left region:", region);
    }
  });
  TaskManager.defineTask("getLocationUpdates", ({ data: { locations }, error }) => {
    if (error) {
      console.log("ERROR");
      return;
    }
    let location = Object.values({...locations})[0].coords
    this.setState({
      location
    })
    this.setState({
      mapRegion: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
  })
})
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
      Location.startLocationUpdatesAsync('getLocationUpdates')
    } else {
      alert('Location permission not granted');
    }
};
  render(){
    this.startTasks()
    return this.state.location ? (
    <LocationAndRZ
      mapRegion={this.state.mapRegion}
      latitude={this.state.location.latitude}
      longitude={this.state.location.longitude}
      location={this.state.location}
    />
    ) : (
      <Text>LOADING</Text>
    )
  } 
}