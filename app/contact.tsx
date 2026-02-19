import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function ContactScreen() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message) {
      Alert.alert("Mesaj boş olamaz");
      return;
    }
    Alert.alert("Mesaj gönderildi");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danışma</Text>

      <TextInput
        style={styles.input}
        placeholder="Sorunuzu yazın..."
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    height: 120,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});