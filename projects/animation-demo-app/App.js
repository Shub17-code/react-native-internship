import { View, Text, Button, Animated } from "react-native";
import { useRef } from "react";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={{ fontSize: 20 }}>Hello Animation 👋</Text>
      </Animated.View>

      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
}