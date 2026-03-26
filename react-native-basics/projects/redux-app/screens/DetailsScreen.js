import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/store";

export default function DetailsScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Details Screen</Text>

      <Button
        title="Change User"
        onPress={() => dispatch(setUser("Redux User"))}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
