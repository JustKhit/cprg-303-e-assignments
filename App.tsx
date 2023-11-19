/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App(): JSX.Element {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (taskText: string) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
