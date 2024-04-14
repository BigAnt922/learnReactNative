import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 8</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 9</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center",
    // gap: 3,
    borderWidth: 8,
    borderColor: "red",
  },
});

/**
 * postion:'relative' is default, top,left,bottom,right are wrt to its original position && not reoved from flow
 * postion:'absolute' is wrt to parent contianer (here view)
 * hmmmm.....smiliar to css
 */
