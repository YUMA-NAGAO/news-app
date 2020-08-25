import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    backgroundColor: "red",
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 10,
    color: "gray",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        title="    According to the Shitokan system, it corresponded to suke (the
          deputy), and was called 'sunai-suke' (small Suke) because chojo was
          also 'suke.hffhao;djfhoa;j'"
        author="SampleNews"
        imageURL="https://picsum.photos/id/10/200/200"
      />
      <ListItem
        title="    According to the Shitokan system, it corresponded to suke (the
          deputy), and was called 'sunai-suke' (small Suke) because chojo was
          also 'suke.hffhao;djfhoa;j'"
        author="Sws"
        imageURL="https://picsum.photos/id/10/200/200"
      />

      <ListItem
        title="    According to the Shitokan system, it corresponded to suke (the
          deputy), and was called 'sunai-suke' (small Suke) because chojo was
          also 'suke.hffhao;djfhoa;j'"
        author="SampleNews"
        imageURL="https://picsum.photos/id/10/200/200"
      />
    </View>
  );
}
