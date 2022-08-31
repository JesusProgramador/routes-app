import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';
const PermissionsScreen = () => {
  const checkLocationPermission = async () => {
    let permissionStatus;
    if (Platform.OS === 'android') {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    console.log({permissionStatus});
  };
  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>

      <Button title="Permiso" onPress={checkLocationPermission} />
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
