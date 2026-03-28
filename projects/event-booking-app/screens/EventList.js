import { View, Text, Button } from "react-native";

const events = [
  { id: 1, name: "Music Concert" },
  { id: 2, name: "Tech Conference" },
  { id: 3, name: "Art Exhibition" },
];

export default function EventList({ navigation }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 24 }}>Events</Text>

      {events.map((event) => (
        <View key={event.id} style={{ marginTop: 10 }}>
          <Text>{event.name}</Text>

          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate("Details", { event: event })
            }
          />
        </View>
      ))}
    </View>
  );
}