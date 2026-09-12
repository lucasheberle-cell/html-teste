import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <Text style={styles.texto1}>Lajeado, RS</Text>
        <Text style={styles.texto2}>Sex 29/08</Text>
      </View>
      <View style={styles.centro}>
        <Text style={styles.texto3}>20°</Text>
        <Text style={styles.texto4}>Parcialmente Gay</Text>
        <View style={styles.caixinhadosnene}>
          <Text style={styles.texto5}>Max: 25°</Text>
          <Text style={styles.texto6}>Min: 15°</Text>
        </View>
      </View>
      <View style={styles.cabecalho2}>
        <Text style={styles.texto1}>Próximos dias</Text>
      </View>
      <View style={styles.joelinho}>
        <View style={styles.caixa}>
          <Text style={styles.parte1}>Qua</Text>
          <Text style={styles.cubo}></Text>
          <Text style={styles.parte2}>10°</Text>
        </View>
        <View style={styles.caixa}>
          <Text style={styles.parte1}>Qui</Text>
          <Text style={styles.cubo}></Text>
          <Text style={styles.parte2}>10°</Text>
        </View>
        <View style={styles.caixa}>
          <Text style={styles.parte1}>Sex</Text>
          <Text style={styles.cubo}></Text>
          <Text style={styles.parte2}>10°</Text>
        </View>
        <View style={styles.caixa}>
          <Text style={styles.parte1}>Sáb</Text>
          <Text style={styles.cubo}></Text>
          <Text style={styles.parte2}>10°</Text>
        </View>
        <View style={styles.caixa}>
          <Text style={styles.parte1}>Dom</Text>
          <Text style={styles.cubo}></Text>
          <Text style={styles.parte2}>10°</Text>
        </View>
      </View>
      <View style={styles.canela}>
        <Text style={styles.alerta}>Alerta</Text>
        <Text style={styles.textoA}>Possibilidade de chuva.</Text>
      </View>
      <View style={styles.final}>
        <View style={styles.pe}>
          <Text style={styles.semana}>Ver semana completa</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },

  cabecalho2: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },


  texto1: {
    color: "#000000",
    fontSize: 15,


  },

  texto2: {
    color: "#4d4d4d",
    fontSize: 10,


  },
  centro: {
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 20,
    alignItems: "center",
    paddingTop: 35,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#a9ccee",
  },

  texto3: {
    color: "#000000",
    fontSize: 50,


  },

  texto4: {
    color: "#4d4d4d",
    fontSize: 20,
  },
  caixinhadosnene: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,

  },
  texto5: {
    color: "#4d4d4d",
    fontSize: 13,
  },
  texto6: {
    color: "#4d4d4d",
    fontSize: 13,
  },

  joelinho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  caixa: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#dadcdd",
  },
  parte1: {
    color: "#000000",
    fontSize: 15,
  },
  parte2: {
    color: "#4d4d4d",
    fontSize: 15,
  },
  cubo: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#608de2",
  },
  canela: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#ffe96c",
  },
  alerta: {
    color: "#000000",
    fontSize: 15,
  },
  textoA: {
    color: "#4d4d4d",
    fontSize: 15,
  },
  pe: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: "#6cacff",
    width: "100%",
  },
  semana: {
    color: "#ffffff",
    fontSize: 15,
  },
  final: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: "auto",
    marginBottom: 50,
  },
});