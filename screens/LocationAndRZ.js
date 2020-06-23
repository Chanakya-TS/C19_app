import React from 'react'
import DisplayUserLocationAndRZ from '../components/DisplayUserLocationAndRZ'
import { View, Text } from 'react-native'
import globalStyles from '../styles/globalStyles'
import regions from '../regions/regions'

export default class LocationAndRZ extends React.Component {
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
  }
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
