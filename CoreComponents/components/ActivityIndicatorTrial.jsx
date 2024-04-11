import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ActivityIndicatorTrial = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <View style={styles.container}>
      {showLoader ? (
        <ActivityIndicator style={styles.upper} size="large" color="gold" />
      ) : (
        <Text style={styles.upper}>Loader Comes Here</Text>
      )}
      <Button
        title={showLoader ? "Hide Loader" : "Show Loader"}
        onPress={() => setShowLoader(!showLoader)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  upper: {
    paddingBottom: 32,
    fontSize: 24,
    fontWeight: "600",
  },
});

export default ActivityIndicatorTrial;
