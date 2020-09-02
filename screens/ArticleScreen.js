import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
