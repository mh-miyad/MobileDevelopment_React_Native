import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([{ id: "1", title: "Task 1" }]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), title: task }]);
      setTask("");
    }
  };
  return (
    <View className="flex-1 py-20 px-5 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-5">Todo App</Text>
      <View className="flex-row mb-4">
        <TextInput
          className="flex-1 border border-gray-300 rounded-lg p-3 mr-2"
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-3"
          onPress={addTask}
        >
          <Text className="text-white text-center">Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="p-3 border-b border-gray-300">{item.title}</Text>
        )}
      />
    </View>
  );
};

export default index;
