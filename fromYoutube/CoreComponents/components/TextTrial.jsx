import { Text, View } from "react-native";

const TextTrial = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text style={{ fontSize: 32 }}>
        <Text style={{ color: "white" }}>Hello</Text> World
      </Text>
    </View>
  );
};

export default TextTrial;
