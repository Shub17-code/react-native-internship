import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 🚀</Text>

      <Text style={styles.subtitle}>This is my first styled app</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Click Me"
          onPress={() => alert("Styled Button Pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f2ff",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },

  buttonContainer: {
    width: "60%",
  },
});
