import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [steps, setSteps] = useState("");
  const [result, setResult] = useState("");

  const handleTrack = () => {
    if (steps === "") return;

    setResult(`You walked ${steps} steps today 🚶`);
    setSteps("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker 💪</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter steps"
        value={steps}
        onChangeText={setSteps}
        keyboardType="numeric"
      />

      <Button title="Track Steps" onPress={handleTrack} />

      {result !== "" && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});