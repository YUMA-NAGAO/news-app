import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import articles from "./dummies/articles.json";

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
  const items = articles.map((articles, index) => {
    return (
      <ListItem
        imageURL={articles.urlToImage}
        title={articles.title}
        author={articles.author}
        key={index}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageURL={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
