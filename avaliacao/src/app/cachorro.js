import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cachorro() {
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState("");

  async function buscar() {
    try {
      const resposta = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!resposta.ok) {
        throw new Error("Não foi possível buscar outro cachorro.");
      }

      const dados = await resposta.json();
      if (typeof dados.message !== "string") {
        throw new Error("A resposta não contém o endereço da imagem.");
      }

      setImagem(dados.message);
      setErro("");
    } catch (error) {
      setErro(error.message);
    }
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Cachorros" }} />

      {imagem ? (
        <Image
          source={{ uri: imagem }}
          style={{ width: "100%", height: 320 }}
        />
      ) : null}
      <Button title="Outro cachorro" onPress={buscar} />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 12,
  },
  erro: {
    color: "#B91C1C",
  },
});
