import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const API_URL = "https://6ae538b528393034b08e37e7.mockapi.io/pets/animais";

export default function Petshop() {
  const [nomes, setNomes] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  async function buscarpet() {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    setNomes(dados);
  }

  async function salvarPet() {
    const pet = { nome, idade, especie, raca, genero };

    if (idEditando === 0) {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
          nome: nome,
          idade: idade,
          especie: especie,
          raca: raca,
          genero: genero,
      });
      setIdEditando(0);
    } else {
      await fetch(`${API_URL}/${idEditando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
        nome: nome,
        idade: idade,
        especie: especie,
        raca: raca,
        genero: genero,
      });
    }

    setNome("");
    setIdade(0);
    setEspecie("");
    setRaca("");
    setGenero("");

    buscarpet();
  }

  async function excluirPet(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    buscarpet();
  }

  function editar(item) {
    setIdEditando(item.id);
    setNome(item.nome);
    setIdade(item.idade);
    setEspecie(item.especie);
    setRaca(item.raca);
    setGenero(item.genero);
  }

  useEffect(() => {
    buscarpet();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Meus pets" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
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
          <View style={[styles.item, styles.itemContainer]}>
            <Text style={styles.itemTexto}>
              {item.id} - {item.nome} - {item.idade} anos - {item.especie} - {item.raca} - {item.genero}
            </Text>
            <View style={styles.botoesContainer}>
              <Button title="🗑️" color="#D64545" onPress={() => excluirPet(item.id)} />
              <Button title="✏️" color="#48494b" onPress={() => editar(item)} />
            </View>
          </View>
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
        padding: 8,
      },
      itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        gap: 4,
      },
      itemTexto: {
        flex: 1,
        padding: 8,
        fontSize: 15,
        color: "#111827",
      },
      botoesContainer: {
        flexDirection: "row",
        alignItems: "center",
      },

});