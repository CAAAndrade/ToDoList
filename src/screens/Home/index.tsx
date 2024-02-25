import { useEffect, useState } from "react";

import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TaskInfo } from "../../components/TaskInfo";
import { TaskCard } from "../../components/TaskCard";

import { styles } from "./styles";
import { COLORS, SIZES } from "../../styles/styles";

export function Home() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<{ task: string; check: boolean }[]>([]);

  function handleAddTask() {
    if (newTask === "") {
      return Alert.alert("A tarefa esta vazia");
    }
    setTasks([...tasks, { task: newTask, check: false }]);
    setNewTask("");
    Alert.alert("Tarefa adicionada com sucesso!");
  }

  function handleTaskRemove(task: string) {
    Alert.alert("Remover", `Deseja remover a tarefa: ${task}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevstate) =>
            prevstate.filter((item) => item.task !== task)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }


  function handleChecked(task: string) {
    setTasks(tasks.filter((item) => item.task === task ? item.check = !item.check : item.check))
  }


  return (

    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputText}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={COLORS.gray300}
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={handleAddTask}>
          <Ionicons
            name="add-circle-outline"
            size={24}
            color={COLORS.gray100}
          />
        </TouchableOpacity>
      </View>
      <TaskInfo criadas={tasks.length} concluidas={tasks.filter((item) => item.check).length} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.task}
        renderItem={({ item }) => (
          <TaskCard
            onRemove={() => handleTaskRemove(item.task)}
            task={item.task}
            check={item.check}
            onChecked={() => handleChecked(item.task)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image source={require("../../assets/Clipboard.png")}/>
            <Text style={styles.listEmptyText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.listEmptyText2}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}
