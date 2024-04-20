import React from "react";
import { Button, Text, View } from "react-native";

const List = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        List
      </Text>
      <Button title="next" onPress={() => navigation.navigate("details")} />
    </View>
  );
};

export default List;
