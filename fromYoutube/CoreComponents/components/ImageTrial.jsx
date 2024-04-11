import { Image, View } from "react-native";

const ImageTrial = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Image
        source={require("../assets/adaptive-icon.png")}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default ImageTrial;
