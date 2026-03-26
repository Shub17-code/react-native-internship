import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ApiErrorDemo() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      {error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : (
        data.slice(0, 5).map((item) => <Text key={item.id}>{item.title}</Text>)
      )}
    </View>
  );
}
