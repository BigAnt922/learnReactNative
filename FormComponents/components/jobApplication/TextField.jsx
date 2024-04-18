import { StyleSheet, Text, TextInput, View } from "react-native";

const TextField = ({ label, type, ...restProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, type === "multi" && styles.multi]}
        autoCorrect={false}
        secureTextEntry={type === "password"}
        keyboardType={
          type === "email"
            ? "email-address"
            : type === "phone"
            ? "phone-pad"
            : "default"
        }
        multiline={type === "multi"}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },

  label: {
    color: "midnightblue",
    fontWeight: "700",
    fontSize: 24,
    paddingBottom: 4,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "midnightblue",
    height: 48,
    padding: 8,
    textAlign: "left",
    color: "midnightblue",
    fontSize: 24,
    fontWeight: "400",
    width: 350,
  },
  multi: {
    height: 160,
    textAlignVertical: "top",
  },
});

export default TextField;
