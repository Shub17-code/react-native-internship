import { View, Text, Button } from "react-native";
import { useState, useMemo } from "react";

export default function PerformanceDemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Count: {count}</Text>
      <Text>Result: {expensiveCalculation}</Text>

      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}
