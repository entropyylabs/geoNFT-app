import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as WebBrowser from 'expo-web-browser';

function HomeScreen({ navigation }) {
  const [wallet, setWallet] = useState(null);

  const _handlePressButtonAsync = async () => {
    let wallet_comp = await WebBrowser.openBrowserAsync('https://sequence.app/auth');
    setWallet(wallet_comp);
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    <Text>Home component!</Text>
    <StatusBar style="auto" />
    <Button
        title="Connect wallet!"
        onPress={_handlePressButtonAsync}
      />
  </View>
  );
}

function WalletScreen() {
  return (
    <WebView 
    style={styles.container}
    source={{ uri: 'https://sequence.app/auth' }}
  />
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
