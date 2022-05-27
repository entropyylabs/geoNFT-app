import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import GameList from "./GameList";

const GameOptions = () => {
  return (
    <View style={stylesG.safeArea}>
      <Text style={stylesG.headingText}>Explore games</Text>
      <View style={stylesG.buttons}>
        <Pressable style={stylesG.freeButton}>
          <Text style={stylesG.textStyleFree}>Free</Text>
        </Pressable>
        <Pressable style={stylesG.paidButton}>
          <Text style={stylesG.textStyle}>Paid</Text>
        </Pressable>
      </View>
      <GameList />
    </View>
  );
};

export default GameOptions;

const stylesG = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  safeArea: {
    paddingTop: 35,
    paddingLeft: 10,
    backgroundColor: "black",
    flex: 1,
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  textStyleFree: {
    color: "black",
    fontSize: 13,
  },
  headingText: {
    color: "white",
    fontSize: 36,
    marginTop: 30,
  },
  freeButton: {
    backgroundColor: "white",
    width: 84,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
  },
  paidButton: {
    backgroundColor: "black",
    width: 84,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
});
