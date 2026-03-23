import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
