import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
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

const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://picsum.photos/id/10/200/200" }}
        />
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          According to the Shitokan system, it corresponded to suke (the
          deputy), and was called 'sunai-suke' (small Suke) because chojo was
          also 'suke.'
        </Text>
        <Text style={styles.subtext}>ReactNews</Text>
      </View>
    </View>
  );
};

export default ListItem;
