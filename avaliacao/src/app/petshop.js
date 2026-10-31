import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";


export default function Petshop() {
  const [nomes, setNomes] = useState([]);
  const [idade, setIdade] = useState(0);
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("");
  


  async function buscarpet() {
    const resposta = await fetch(
      "https://6ae538b528393034b08e37e7.mockapi.io/pets/animais",
    );
    const dados = await resposta.json();
    setNomes(dados);
  }

  async function salvarPet() {
    await fetch("https://6ae538b528393034b08e37e7.mockapi.io/pets/animais", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nomes,
        idade: idade,
        especie: especie,
        raca: raca,
        genero: genero,
      }),
    });
    setNomes("");
    setIdade(0);
    setEspecie("");
    setRaca("");
    setGenero("");

    buscarpet();
  }

  useEffect(() => {
    buscarpet();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Meus pets" }} />

      <TextInput
        style={styles.campo}
        value={nomes}
        onChangeText={setNomes}
        placeholder="Nome do pet"
      />
      <TextInput
        style={styles.campo}
        value={idade.toString()}
        onChangeText={(text) => setIdade(parseInt(text) || 0)}
        keyboardType="numeric"
        placeholder="Idade do pet"
      />
      <TextInput
        style={styles.campo}
        value={especie}
        onChangeText={setEspecie}
        placeholder="Especie do pet"
      />
      <TextInput
        style={styles.campo}
        value={raca}
        onChangeText={setRaca}
        placeholder="Raça do pet"
      />
      <TextInput
        style={styles.campo}
        value={genero}
        onChangeText={setGenero}
        placeholder="Gênero do pet"
      />
       

      <Button title="Salvar pet" onPress={salvarPet} />

      <FlatList
        style={styles.lista}
        data={nomes}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} - {item.nome} - {item.idade} anos - {item.especie} - {item.raca} - {item.genero}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },
});