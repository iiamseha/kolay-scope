import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailScreen() {
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.item}>• Çekirdekli meyve tüketmeyin</Text>
      <Text style={styles.item}>• Bol sıvı tüketin</Text>
      <Text style={styles.item}>• Doktor talimatlarını takip edin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F766E",
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
    color: "#374151",
  },
});