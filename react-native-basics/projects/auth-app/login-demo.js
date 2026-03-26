import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginDemo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
