//no terminal e preciso usar o comando: npm install react-native-maps
//e entao colocar o codigo abaixo dentro do app.js 



import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.6590,
          longitude: 139.7006,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 35.6590, longitude: 139.7006 }}
          title="Shibuya"
          description="Neighborhood in Tokyo, Japan"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
