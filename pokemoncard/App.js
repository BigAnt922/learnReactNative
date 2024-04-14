import { StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import Pokemon from "./components/Pokemon";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Pokemon />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 24 : 0,
  },
});
