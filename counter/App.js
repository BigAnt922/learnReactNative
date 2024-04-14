import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="purple" />
      <Text style={styles.title}>COUNTER</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.button}>
        <Button
          color="midnightblue"
          onPress={() => setCount(count + 1)}
          title="Increment"
        />
      </View>
      <View style={styles.button}>
        <Button
          color="midnightblue"
          onPress={() => setCount(count - 1)}
          title="Decrement"
          disabled={count === 0}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="midnightblue"
          onPress={() => setCount(0)}
          title="Reset"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "purple",
    textDecorationLine: "underline",
  },
  counter: { fontSize: 80, fontWeight: "800", color: "#991455" },
  button: {
    width: 200,
    height: 40,
  },
});
