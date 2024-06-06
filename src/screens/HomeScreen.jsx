import { Button, Surface, Text } from "react-native-paper";
import styles from "../config/styles";
import NewsScreen from "./NewsScreen";

export default function HomeScreen({navigation}) {
  return (
   <Surface style={styles.container}>
    <Text>Bem vinda(o) ao ChicCloset</Text>
    <Button mode="contained" onPress={() => navigation.navigate("About")}>
      Login
      <NewsScreen/>
    </Button>
   </Surface>

  );
}
