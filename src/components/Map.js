import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <>
      <MapView
        style={styles.mapContainer}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
});
