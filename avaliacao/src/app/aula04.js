import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>batata</Text>
      <Pressable >
        <Text>Babuino leitero Americano</Text>
      </Pressable>
      <StatusBar style="auto" />
      <Button
        title="Clique para o biscoito"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#c71212"
      >
        <Text>Olá :D</Text>
      </TouchableHighlight>

      <View style={styles.rodape}>
        <Text style={styles.detalhe}>
          O botão de voltar do cabeçalho já funciona. Este aqui faz a mesma
          coisa por código, para quando a volta acontece depois de salvar algo.
        </Text>
        <Button title="VOLTAR" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#554c4c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
