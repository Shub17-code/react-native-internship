import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const user = useSelector((state) => state.user.name);

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Home Screen</Text>
      <Text>User: {user}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
