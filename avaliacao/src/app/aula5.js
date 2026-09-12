import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <Stack.Screen options={{ title: "Painel" }} />

      <View style={styles.cabecalho}>
        <View style={styles.icone}></View>
        <View>
          <Text style={styles.texto1}>React Native</Text>
          <Text style={styles.texto2}>Avaliação dia 04/09</Text>
        </View>
      </View>
      <View style={styles.areaCartao}>
        <View style={styles.cartao}>
          <Text style={styles.texto3}>Batatas são macias.</Text>
        </View>
        <View style={styles.cabecalhobotao}>
          <View style={styles.botao}>
            <Text style={styles.texto4}>ENVIAR</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },

  texto1: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",

  },
  texto2: {
    color: "#7c7777",
    fontSize: 10,

  },

  texto3: {
    color: "#000000",
    fontSize: 20,
  },

  texto4: {
    color: "#ffffff",
    fontSize: 15,
  },

  cabecalho: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
  },


  icone: {
    width: 50,
    height: 50,
    backgroundColor: "#331ea8",
    borderRadius: 50,

  },

  cartao: {
    width: 350,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#75797c",
  },

  areaCartao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cabecalhobotao: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    height: 100,
  },
  botao: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2832c4",
  },

});