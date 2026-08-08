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
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
