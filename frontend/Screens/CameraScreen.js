import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Camera } from "expo-camera";
import * as WebBrowser from "expo-web-browser";
import gotNFT from "./assets/gotNFT.png";
import { useIsFocused } from "@react-navigation/native";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [result, setResult] = useState(null);
  const isFocused = useIsFocused();

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://sequence.app/connect"
    );
    setResult(result);
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <Pressable onPress={_handlePressButtonAsync}>
              <Image source={gotNFT} />
            </Pressable>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
