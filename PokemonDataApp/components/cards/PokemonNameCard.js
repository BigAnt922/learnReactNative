import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { imageObject } from "../../helper/Image";

const PokemonNameCard = ({ navigation, route, type, ...restProps }) => {
  const { pokemonName = "", pokemonDetailUrl } = restProps;

  const width = useWindowDimensions().width;

  const navigateToPokemonDetails = () => {
    navigation.navigate("details");
  };

  return (
    <Pressable
      onLongPress={navigateToPokemonDetails}
      onPress={navigateToPokemonDetails}
    >
      <View style={[styles.typeCardContainer, { width: width / 1.15 }]}>
        <Image source={imageObject[type] || imageObject["noImage"]} />
        <Text style={styles.type}>{pokemonName}</Text>
        <Image source={require("../../assets/nextPage.png")} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  typeCardContainer: {
    backgroundColor: "#FEF9E7",
    borderColor: "gold",
    borderWidth: 2,
    borderRadius: 4,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    fontSize: 24,
    fontWeight: "800",
    color: "purple",
    textTransform: "capitalize",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "center",
  },
});

export default PokemonNameCard;
