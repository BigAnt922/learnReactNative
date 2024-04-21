import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TypeCard from "../../cards/TypeCard";

const TypeList = ({ navigation, data = [] }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={(item) => <TypeCard {...item.item} />}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default TypeList;
