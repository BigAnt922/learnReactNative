import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getListOfOneType, getPokemonDetailById } from "../api/getRequest";
import Loader from "../components/Loader";
import Error from "../components/Error";

const List = ({ navigation, route }) => {
  const { name = "", url } = route.params;
  const [list, setList] = useState({
    reqStatus: false,
    data: [],
    errorStatus: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${
        name[0].toUpperCase() + name.substring(1).toLowerCase()
      } Pokemons`,
    });

    const pokemonDataArray = [];

    getListOfOneType(url)
      .then((resp) =>
        resp.pokemon.forEach((item) => {
          getPokemonDetailById(item.pokemon.url)
            .then((res) => {
              const obj = {
                name: item.pokemon.name,
                url: item.pokemon.url,
                profileImageUrl: res.profileImageUrl,
                actualImageUrl: res.actualImageUrl,
                moves: res.moves,
                abilities: res.abilities,
                damage: { ...resp.damage_relations },
                height: res.height,
                weight: res.weight,
                minHp: res.minHp,
                maxHp: res.maxHp,
              };
              pokemonDataArray.push(obj);
            })
            .catch((err) => console.error(err));
        })
      )
      .catch((err) => setList({ ...list, errorStatus: true }));
  }, []);

  console.log(list);
  return (
    <View style={styles.listContainer}>
      {list.errorStatus ? (
        <Error message={list.data[0]?.message ?? "Something went wrong"} />
      ) : list.reqStatus ? (
        <Text>{JSON.stringify(list)}</Text>
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
