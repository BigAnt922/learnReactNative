import { View, Text, StyleSheet, Image } from "react-native";
import { arrayToSentance } from "../helper";

const Pokemon = ({ name, image, type, hp, moves = [], weakness = [] }) => {
  const borderStyle =
    type === "fire"
      ? styles.redBorder
      : type === "water"
      ? styles.blueBorder
      : type === "grass"
      ? styles.greenBorder
      : styles.goldBorder;

  const textColor =
    type === "fire"
      ? styles.redText
      : type === "water"
      ? styles.blueText
      : type === "grass"
      ? styles.greenText
      : styles.goldText;

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={[styles.name, textColor]}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} : ${type} pokemon`}
      />

      <View style={[styles.typeContainer, borderStyle]}>
        <Text style={[styles.type, textColor]}>
          {type === "fire"
            ? "🔥"
            : type === "water"
            ? "💧"
            : type === "grass"
            ? "🍃"
            : "⚡"}{" "}
          {type}
        </Text>
      </View>

      <View style={styles.moveContainer}>
        <Text style={styles.move}>⚔️ {arrayToSentance(moves)}</Text>
      </View>

      <View>
        <Text style={styles.weakness}>🤕 {arrayToSentance(weakness)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 3,
    padding: 24,
    margin: 24,
    borderRadius: 16,
    elevation: 8,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
  },
  hp: {
    fontSize: 17,
    top: 2,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 24,
    resizeMode: "contain",
  },
  typeContainer: {
    alignSelf: "center",
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginBottom: 24,
  },
  redBorder: {
    color: "red",
    borderColor: "red",
  },
  greenBorder: {
    color: "green",
    borderColor: "green",
  },
  blueBorder: {
    color: "blue",
    borderColor: "blue",
  },
  goldBorder: {
    color: "gold",
    borderColor: "gold",
  },
  redText: {
    color: "red",
  },
  greenText: {
    color: "green",
  },
  blueText: {
    color: "blue",
  },
  goldText: {
    color: "gold",
  },
  type: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  moveContainer: {
    marginBottom: 16,
  },
  move: {
    fontSize: 22,
    fontWeight: "600",
    color: "purple",
  },
  weaknessContainer: {
    marginBottom: 16,
  },
  weakness: {
    fontSize: 22,
    fontWeight: "600",
    color: "purple",
  },
});

export default Pokemon;
