import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TypeCard from "../../cards/TypeCard";
import PokemonNameCard from "../../cards/PokemonNameCard";

const ListOfPokemons = ({ navigation, route, data = [] }) => {
  const heading = route.params?.name ?? "";

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <PokemonNameCard
            navigation={navigation}
            route={route}
            type={heading}
            {...item.item}
          />
        )}
        keyExtractor={(item) => item.url}
        ItemSeparatorComponent={<View style={styles.itemSeprator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
  itemSeprator: {
    marginBottom: 16,
  },
  heading: {
    color: "gold",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginBottom: 24,
  },
});

export default ListOfPokemons;
