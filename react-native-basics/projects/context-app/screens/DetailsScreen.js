import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function DetailsScreen({ navigation }) {
  const { user, setUser } = useContext(AppContext);

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Details Screen</Text>
      <Text>User: {user}</Text>

      <Button title="Change User" onPress={() => setUser("Updated User")} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
