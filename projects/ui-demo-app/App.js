import { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UI Components Demo</Text>

      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <Text>Modal Opened 🎉</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});