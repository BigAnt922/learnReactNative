import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getListOfOneType, getPokemonDetailById } from "../api/getRequest";
import Loader from "../components/Loader";
import Error from "../components/Error";

const List = ({ navigation, route }) => {
  const { name = "", url } = route.params;
  const [list, setList] = useState({ reqStatus: false, data: [] });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${
        name[0].toUpperCase() + name.substring(1).toLowerCase()
      } Pokemons`,
    });

    const pokemonDataArray = [];

    getListOfOneType(url)
      .then((res) =>
        res.pokemon.forEach((item) => {
          const obj = {
            name: item.pokemon.name,
            url: item.pokemon.url,
            profileImageUrl: "",
            actualImageUrl: "",
            moves: [],
            abilities: [],
            damage: { ...res.damage_relations },
            height: 0,
            weight: 0,
          };
          // getPokemonDetailById(item.pokemon.url);
          pokemonDataArray.push(obj);
        })
      )
      .catch((err) => setList({ reqStatus: true, data: [] }))
      .finally(() => setList({ reqStatus: true, data: pokemonDataArray }));
  }, []);

  return (
    <View style={styles.listContainer}>
      {list.reqStatus ? (
        list.data.length > 1 ? (
          <Text>{JSON.stringify(list)}</Text>
        ) : (
          <Error message={list.data[0]?.message ?? "Something went wrong"} />
        )
      ) : (
        <Loader message={"Loading ..."} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default List;
