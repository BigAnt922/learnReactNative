import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
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
      <FlatList
        data={pokimonData}
        renderItem={(item) => <Pokemon {...item.item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<Text style={styles.downArrow}>👇</Text>}
        ListEmptyComponent={
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="gold" />
            <Text style={styles.loadingText}>Loading Pokimons</Text>
          </View>
        }
        ListHeaderComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose your pokemon</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>End Of List</Text>
          </View>
        }
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
  downArrow: {
    textAlign: "center",
    fontSize: 32,
  },
  loading: {
    justifyContent: "center",
    paddingTop: 40,
    alignItems: "center",
  },
  loadingText: {
    fontSize: 40,
    fontWeight: "700",
    color: "gold",
  },
});
