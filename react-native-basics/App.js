import { View, Text, Button } from "react-native";

export default function App() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Hello React Native 🚀</Text>

      <Button title="Click Me" onPress={() => alert("Button Pressed")} />
    </View>
  );
}
