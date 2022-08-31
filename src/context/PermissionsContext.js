/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
} from 'react-native-permissions';

export const permissionsInitState = {
  locationStatus: 'unavailable',
};

export const PermissionsContext = createContext({});

export const PermissionsProvider = ({children}) => {
  const [permissions, setPermissions] = useState(permissionsInitState);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }
      checkLocationPermission();
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus;
    if (Platform.OS === 'android') {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    if (permissionStatus === 'blocked') {
      openSettings();
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  const checkLocationPermission = async () => {
    let permissionStatus;
    if (Platform.OS === 'android') {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
