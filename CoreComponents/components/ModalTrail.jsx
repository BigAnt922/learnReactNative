//Modal & Status bar

import { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ModalTrail = () => {
  const [openModal, setOpenModal] = useState(false);

  const [showStatusBar, setShowStatusBar] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="midnightblue"
        barStyle="light-content"
        hidden={!showStatusBar}
      />

      <Button
        title="Show Modal"
        color="midnightblue"
        onPress={() => setOpenModal(true)}
      />

      <Text style={{ paddingBottom: 24 }}></Text>

      <Button
        title="Hide Status Bar"
        color="midnightblue"
        onPress={() => {
          setShowStatusBar(!showStatusBar);
          Alert.alert("Status Bar Hidden", "look at top");
        }}
      />

      <Modal
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
        animationType="slide"
      >
        <View style={styles.containerChild}>
          <Text style={styles.text}>I AM MODAL</Text>
          <Button title="close modal" onPress={() => setOpenModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  containerChild: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "purple",
    fontSize: 32,
    fontWeight: "800",
  },
});

export default ModalTrail;
