import { Button, Text, View } from "react-native";

const ButtonTrial = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="press"
        onPress={() => console.log("Button Pressed")}
        color="gold"
        disabled={false}
      />
    </View>
  );
};

export default ButtonTrial;
