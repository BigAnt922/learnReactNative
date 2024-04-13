import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MultipleStyleTrail = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"purple"} barStyle="light-content" />
      <Pressable
        onPress={() => Alert.alert("UP was tapped.", "This is short tap.")}
        onLongPress={() => Alert.alert("UP was tapped.", "This is long tap.")}
      >
        <View style={[styles.childView, styles.top]}>
          <Text style={styles.text}>UP</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => Alert.alert("DOWN was tapped.", "This is short tap.")}
        onLongPress={() => Alert.alert("DOWN was tapped.", "This is long tap.")}
      >
        <View style={[styles.childView, styles.bottom]}>
          <Text style={styles.text}>BOTTOM</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  childView: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 50,
    elevation: 50,
  },
  top: {
    backgroundColor: "red",
  },
  bottom: {
    backgroundColor: "green",
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
});

export default MultipleStyleTrail;
