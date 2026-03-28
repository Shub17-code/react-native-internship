import { View, Text, Button } from "react-native";

export default function EventDetails({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 22 }}>{event.name}</Text>

      <Button
        title="Book Event"
        onPress={() => alert("Event Booked!")}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}