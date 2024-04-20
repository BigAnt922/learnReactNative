import React from "react";
import { Text, View } from "react-native";

const Details = () => {
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
        Detail
      </Text>
    </View>
  );
};

export default Details;
