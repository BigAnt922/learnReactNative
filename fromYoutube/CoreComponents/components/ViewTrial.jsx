import { View } from "react-native";

const ViewTrial = ({ color1, color2, color3 }) => {
  return (
    <View style={{ flex: 1, backgroundColor: color1 }}>
      <View style={{ height: 200, width: 200, backgroundColor: color2 }}>
        <View style={{ height: 50, width: 50, backgroundColor: color3 }}></View>
      </View>
      <View style={{ height: 50, width: 50, backgroundColor: color3 }}></View>
    </View>
  );
};

export default ViewTrial;
