import { StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import Pokemon from "../components/Pokemon";

const pokimonData = [
  {
    id: 0,
    name: "Charmander",
    image: require("../assets/charmander.png"),
    type: "fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl"],
    weakness: ["Water", "Rock"],
  },
  {
    id: 1,
    name: "Squirtle",
    image: require("../assets/squirtle.png"),
    type: "water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Water Bullet"],
    weakness: ["Electric"],
  },
  {
    id: 2,
    name: "Bulbasaur",
    image: require("../assets/bulbasaur.png"),
    type: "grass",
    hp: 45,
    moves: ["Razor Leaf", "Wine Whip", "Leech Seed"],
    weakness: ["Fire", "Flying", "Rock"],
  },
  {
    id: 3,
    name: "Pikachu",
    image: require("../assets/pikachu.png"),
    type: "electric",
    hp: 61,
    moves: ["Thunder Bold", "Thunder shock", "Tackle", "Iron Tail"],
    weakness: ["Ground", "Rock"],
  },
];

export default function UsingFlatList() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="purple" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your pokemon</Text>
      </View>
      <FlatList
        data={pokimonData}
        renderItem={(item) => <Pokemon {...item.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  titleContainer: {
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    textDecorationLine: "underline",
    color: "purple",
    fontWeight: "600",
    textAlign: "center",
  },
});
