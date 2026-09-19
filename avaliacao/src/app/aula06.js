import { Stack } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contador() {

    const [valor, setValor] = useState(0);

    function aumentar() {
        setValor(valorAtual + 1);
    }

    function diminuir() {
        setValor(valorAtual - 1);
    }

    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Voltar" }} />
            <Text style={styles.titulo}>Contador</Text>
            <Text style={styles.valor}>{valor}</Text>
            <View style={styles.botoes}>
                <Button title="Aumentar" onPress={aumentar} />
                <Button title="Diminuir" onPress={diminuir} />
            </View>
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
    titulo: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    valor: {
        fontSize: 48,
        textAlign: "center",
        marginVertical: 24,
    },
    botoes: {
        gap: 12,
    },

});