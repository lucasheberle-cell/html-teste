import { Stack } from "expo-router";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contador() {

    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);

    function adicionar() {
        setLista([...lista, texto]);
        setTexto("");
    }


    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Lista" }} />
            <Text style={styles.titulo}>Listinha dos Guri😎</Text>
            <TextInput
                style={styles.entrada}
                placeholder="Digite um item..."
                value={texto}
                onChangeText={setTexto}
            />
            <Button title="Adicionar" onPress={adicionar} />
            <FlatList
                data={lista}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
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
    titulo: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    entrada: {
        borderWidth: 1,
        borderColor: "#030303",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    item: {
        backgroundColor: "#48494b",
        color: "#FFFFFF",
        padding: 10,
        marginTop: 5,
    },

});