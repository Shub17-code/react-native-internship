import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Details Screen</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
