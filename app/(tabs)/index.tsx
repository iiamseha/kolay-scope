import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const steps = [
  { id: "1", title: "İşlemden 3 Gün Önce" },
  { id: "2", title: "İşlemden 1 Gün Önce" },
  { id: "3", title: "İşlem Günü" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>KolayScope</Text>
      <Text style={styles.sub}>Kolonoskopi Hazırlık Planı</Text>

      <FlatList
        data={steps}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/detail", params: { title: item.title } }}
            asChild
          >
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />

      <Link href="/contact" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Danış</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F766E",
    marginBottom: 5,
  },
  sub: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  button: {
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});