import { StyleSheet, Text, View } from "react-native";

const Box = ({ children, style }) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    // padding: 30,
    padding: 25,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
});
