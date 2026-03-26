import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ApiDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      {data.slice(0, 5).map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}
