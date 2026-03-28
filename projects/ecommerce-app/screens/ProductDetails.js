import { View, Text, Button } from "react-native";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={{ marginTop: 50 }}>
      <Text>{product.name}</Text>

      <Button title="Add to Cart" onPress={() => alert("Added to cart")} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
