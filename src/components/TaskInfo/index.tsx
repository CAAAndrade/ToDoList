import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  criadas: number
  concluidas: number
};

export function TaskInfo({ criadas, concluidas }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text1}>Criadas</Text>
        <Text style={styles.text2}>{criadas}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text3}>Concluídas</Text>
        <Text style={styles.text2}>{concluidas}</Text>
      </View>
    </View>
  );
}
