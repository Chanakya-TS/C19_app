import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import globalStyles from '../styles/globalStyles'
import { Text } from 'react-native';
import DisplayGeoFences from './DisplayGeoFences';

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
      <DisplayGeoFences regions={this.state.regions} />
    </MapView>
    ) : (
      <Text>LOADING LOCATION</Text>
    )
  }
}
