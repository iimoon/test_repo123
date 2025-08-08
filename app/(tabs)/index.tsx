import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Link href="/login" style={styles.button}>Login</Link>
      <Text>Edit app/index.tsx to edit this screen hehe.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: { width: 100, height: 20, backgroundColor: "coral", borderRadius: 8, textAlign: 'center' }
})
