import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import marker from "./assets/marker.png";
import { Entypo } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "CryptoKitties",
    pieces: "1000",
    cost: "10",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    pieces: "1000",
    cost: "10",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    pieces: "1000",
    cost: "10",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.tile}>
      <View style={styles.imageHolder}>
        <Image source={marker} />
      </View>
      <View style={styles.mid}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        <Text
          style={[styles.title, styles.pieces]}
        >{`${item.pieces} pieces`}</Text>
        <Text style={styles.price}>{`${item.pieces} ETH`}</Text>
      </View>
      <View style={styles.chevron}>
        <Entypo name="chevron-right" size={24} color="white" />
      </View>
    </View>
  </TouchableOpacity>
);

const GameList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000000" : "#000000";
    const color = "white";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
  },
  title: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  tile: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageHolder: {
    marginRight: 20,
  },
  chevron: { marginLeft: 70 },
  price: {
    color: "red",
  },
  pieces: {
    fontSize: 14,
  },
  mid: {
    width: 100,
    overflow: "visible",
  },
});

export default GameList;
