import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AppContext);

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
