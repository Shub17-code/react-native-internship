import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventList from "./screens/EventList";
import EventDetails from "./screens/EventDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Events" component={EventList} />
        <Stack.Screen name="Details" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
