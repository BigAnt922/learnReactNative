import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const imageObject = {
  normal: require("../../assets/types/normal.png"),
  fighting: require("../../assets/types/fighting.png"),
  flying: require("../../assets/types/flying.png"),
  poison: require("../../assets/types/poison.png"),
  ground: require("../../assets/types/ground.png"),
  rock: require("../../assets/types/rock.png"),
  bug: require("../../assets/types/bug.png"),
  ghost: require("../../assets/types/ghost.png"),
  steel: require("../../assets/types/steel.png"),
  fire: require("../../assets/types/fire.png"),
  water: require("../../assets/types/water.png"),
  grass: require("../../assets/types/grass.png"),
  electric: require("../../assets/types/electric.png"),
  psychic: require("../../assets/types/psychic.png"),
  ice: require("../../assets/types/ice.png"),
  dragon: require("../../assets/types/dragon.png"),
  dark: require("../../assets/types/dark.png"),
  fairy: require("../../assets/types/fairy.png"),
  unknown: require("../../assets/types/unknown.png"),
  shadow: require("../../assets/types/shadow.png"),
  noImage: require("../../assets/types/noImage.png"),
};

const TypeCard = ({ navigation, ...restProps }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const { name = "", url } = restProps;

  return (
    <Pressable>
      <View
        style={[
          styles.typeCardContainer,
          {
            width: width / 2.4,
            height: height / 4,
            marginRight: 16,
          },
        ]}
      >
        <Image source={imageObject[name] || imageObject["noImage"]} />
        <Text style={styles.type}>{name}</Text>
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
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  type: {
    fontSize: 24,
    fontWeight: "800",
    color: "purple",
    textTransform: "capitalize",
  },
});

export default TypeCard;
