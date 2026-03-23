import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTaskList([...taskList, { id: Date.now().toString(), text: task }]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App 📝</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />

      <View style={{ marginBottom: 10 }}>
        <Button title="Add Task" onPress={addTask} />
      </View>

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskBox}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  taskBox: {
    padding: 10,
    backgroundColor: "#e6f2ff",
    marginTop: 5,
    borderRadius: 6,
  },
});
