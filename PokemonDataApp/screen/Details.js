import React from "react";
import { Text, View } from "react-native";

const Details = ({ navigation, route }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        {JSON.stringify(route.params)}
      </Text>
    </View>
  );
};

export default Details;
