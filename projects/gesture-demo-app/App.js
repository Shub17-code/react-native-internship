import { View, Text, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function App() {
  return (
    <PanGestureHandler>
      <View style={styles.container}>
        <Text>Swipe Gesture Demo 👉</Text>
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});