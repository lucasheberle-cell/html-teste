import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Pokemon() {
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState({});
  const [erro, setErro] = useState("");

  async function buscar() {
    if (!nome.trim()) {
      setDados({});
      setErro("");
      return;
    }

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.trim().toLowerCase()}`,
      );

      if (!resposta.ok) {
        setErro(
          resposta.status === 404
            ? "Pokémon não encontrado."
            : "Não foi possível buscar o Pokémon.",
        );
        setDados({});
        return;
      }

      setDados(await resposta.json());
      setErro("");
    } catch (error) {
      setErro(error.message);
      setDados({});
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Pokémon" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do Pokémon"
        autoCapitalize="none"
        onSubmitEditing={buscar}
      />
      <Button title="Buscar" onPress={buscar} />

      {dados.sprites?.front_default ? (
        <Image
          source={{ uri: dados.sprites.front_default }}
          style={styles.imagem}
        />
      ) : null}
      <Text style={styles.erro}>{erro}</Text>
      <Text style={styles.titulo}>{dados.name}</Text>
      <Text>Altura: {dados.height}</Text>
      <Text>Peso: {dados.weight}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 6,
  },
  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },
  imagem: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "600",
  },
});
