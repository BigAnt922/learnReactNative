import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        Home
      </Text>

      <Button title="next" onPress={() => navigation.navigate("list")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
