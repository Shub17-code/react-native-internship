import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  console.log("User value:", user); // ✅ DEBUG LINE

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Home Screen</Text>

      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
