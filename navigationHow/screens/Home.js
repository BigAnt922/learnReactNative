import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I Am Home Screen</Text>
      <Button
        title="Go To Navigation Screen"
        onPress={() =>
          navigation.navigate("about", {
            name: "Dhiraj",
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 16,
  },
});

export default Home;
