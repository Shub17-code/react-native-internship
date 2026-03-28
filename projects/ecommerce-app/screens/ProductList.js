import { View, Text, Button } from "react-native";

const products = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "T-Shirt" },
  { id: 3, name: "Watch" },
];

export default function ProductList({ navigation }) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Products</Text>

      {products.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>

          <Button
            title="View"
            onPress={() => navigation.navigate("Details", { product: item })}
          />
        </View>
      ))}

      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}
