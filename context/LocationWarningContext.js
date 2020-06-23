import React, { createContext, Component } from 'react';

export const LocationWarningContext = createContext();

class LocationWarningContextProvider extends Component {
    cState = {
        regions: [{
            latitude: 17.5189269,
            longitude: 78.54334519999999,
            radius: 100,
          },{
            latitude: 25,
            longitude: 80.54334,
            radius: 100,
          },{
            latitude: 12,
            longitude: 75.54334,
            radius: 100,
          },{
            latitude: 15,
            longitude: 83.54334,
            radius: 100,
          }],
        mapRegion: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        },
        hasLocationPermissions: false,
        locationResult: null,
        isInRZ: false,
        displayWarning: false,
    }

    setMapRegion = ( mapRegion ) => {
        this.setState({
            mapRegion: mapRegion
        })
    }

    toggleIsInRZ = () => {
        this.setState({isInRZ: !isInRZ})
      }

    setHasLocationPermissions = (bool) => {
        this.setState({hasLocationPermissions: bool})
    }

    setLocationResult = ( location ) => {
        this.setState({ locationResult: JSON.stringify(location) })
    }
    
    render = () => {
        return (
            <LocationWarningContext.Provider value={{cState: {...this.cState}, setMapRegion: this.setMapRegion, toggleIsInRZ: this.toggleIsInRZ, setHasLocationPermissions: this.setHasLocationPermissions, setLocationResult: this.setLocationResult }}>
                {this.props.children}
            </LocationWarningContext.Provider>
        )
    }
}

export default LocationWarningContextProvider;