import React, { useContext, Component, useEffect } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import globalStyles from '../styles/globalStyles'
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import DisplayGeoFences from './DisplayGeoFences';
import DisplayWarning from './DisplayWarning';
import { LocationWarningContext } from '../context/LocationWarningContext';

export default class DisplayUserLocationAndRZ extends Component{
  componentDidUpdate(prevProps){
    if(this.props.mapRegion !== prevProps.mapRegion){
      this.setState({
        mapRegion: this.props.mapRegion,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
      })
    }
  }
  state = {
    mapRegion: this.props.mapRegion,
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    regions: this.props.regions
  }
  render(){
    return this.state.mapRegion ? (
    <MapView
      style={globalStyles.mapStyle}
      region={this.state.mapRegion}
    >
      <Marker
        title="User location"
        coordinate={{
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }}
      />
      {this.state.regions.map((region) => {
        return(
          <Circle
            key={region.longitude+region.latitude}
            center={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            radius={region.radius}
            strokeColor='red'
            fillColor={'rgba(244,0,0,0.4)'}
          />
        )
      })}
    </MapView>
    ) : (
      <Text>LOADING LOCATION</Text>
    )
    
    }
}
