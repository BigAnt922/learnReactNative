import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

const myImage = require("./assets/dhb.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Hello World !!!</Text>
      <Text style={styles.textTwo}>My name is</Text>
      <Text style={styles.textThree}>Dhiraj</Text>
      <Image source={myImage} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    alignItems: "center",
    justifyContent: "center",
  },
  textOne: {
    fontSize: 32,
    fontWeight: "600",
    color: "pink",
  },
  textTwo: {
    fontSize: 64,
    fontWeight: "200",
    color: "green",
  },
  textThree: {
    fontSize: 32,
    fontWeight: "800",
    color: "gold",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "relative",
    top: 80,
  },
});
