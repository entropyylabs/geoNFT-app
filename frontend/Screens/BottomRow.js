import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const BottomRow = () => {
  return (
    <View style={styles.buttonHolder}>
      <Pressable style={styles.btn}>
        <Text>Hello</Text>
      </Pressable>
      <Pressable>
        <Text>Hello</Text>
      </Pressable>
    </View>
  );
};

export default BottomRow;

const styles = StyleSheet.create({
  buttonHolder: {
    flex: 1,
    zIndex: 10,
  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: "#363436",
  },
});
