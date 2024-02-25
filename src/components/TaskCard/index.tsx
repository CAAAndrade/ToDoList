import { Text, View, TouchableOpacity } from "react-native";
import { Checkbox, CheckboxProps } from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { COLORS } from "../../styles/styles";
import { useState } from "react";
type Props = CheckboxProps & {
  task: string;
  check: boolean;
  onRemove: () => void;
  onChecked: () => void;
};
export function TaskCard({ task, check, onRemove, onChecked }: Props) {
  const [isChecked, setIsChecked] = useState(check);

  function handleChecked() {
    setIsChecked(!isChecked);
    onChecked();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.task}>
        <Checkbox
          style={styles.checkbox}
          color={isChecked ? COLORS.purpleDark : undefined}
          value={isChecked}
          onValueChange={handleChecked}
        />
        <Text style={isChecked ? styles.textChecked : styles.text}>{task}</Text>
        <Ionicons
          name="trash-outline"
          size={24}
          style={styles.icon}
          onPress={onRemove}
        />
      </TouchableOpacity>
    </View>
  );
}
