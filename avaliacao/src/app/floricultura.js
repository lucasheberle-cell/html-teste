import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("floricultura.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cor TEXT NOT NULL,
    cientifico TEXT NOT NULL
  );
`);

function listar() {
    return db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
}

function adicionar(nome, cor, cientifico) {
    db.runSync("INSERT INTO tarefas (nome, cor, cientifico) VALUES (?, ?, ?)", [nome, cor, cientifico]);
}

function remover(id) {
    db.runSync("DELETE FROM tarefas WHERE id = ?", [id]);
}

function edita(id, nome, cor, cientifico) {
    db.runSync("UPDATE tarefas SET nome = ?, cor = ?, cientifico = ? WHERE id = ?", [nome, cor, cientifico, id]);
}

export default function ListaDb() {

    const [nome, setNome] = useState("");
    const [lista, setLista] = useState([]);
    const [cor, setCor] = useState("");
    const [cientifico, setCientifico] = useState("");
    const [idEditando, setIdEditando] = useState(0);

    function carregar() {
        setLista(listar());
    }

    useEffect(() => {
        carregar();
    }, []);

    function salvar() {
        adicionar(nome, cor, cientifico);
        setNome("");
        setCor("");
        setCientifico("");
        carregar();
    }

    function excluir(id) {
        remover(id);
        carregar();
    }

    function editar(lista) {
        setIdEditando(lista.id);
        setNome(lista.nome);
        setCor(lista.cor);
        setCientifico(lista.cientifico);
    }

    function guardarEdicao() {
        if (idEditando == 0) {
            salvar(nome, cor, cientifico);
        } else {
            edita(idEditando, nome, cor, cientifico);
        }
        setNome("");
        setIdEditando(0);
        setCor("");
        setCientifico("");
        carregar();
    }


    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Lista" }} />
            <Text style={styles.titulo}>Floricultura</Text>
            <TextInput
                style={styles.entrada}
                placeholder="Digite o nome..."
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.entrada}
                placeholder="Digite a cor..."
                value={cor}
                onChangeText={setCor}
            />
            <TextInput
                style={styles.entrada}
                placeholder="Digite o nome científico..."
                value={cientifico}
                onChangeText={setCientifico}
            />
            {idEditando !== 0 ? (
                <Button title="Guardar Edição" onPress={guardarEdicao} />
            ) : (
                <Button title="Salvar" onPress={salvar} />
            )}
            <FlatList
                data={lista}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.item}>{item.nome} {item.cor} {item.cientifico}</Text>
                        <Button title="🗑️" color="#D64545" onPress={() => excluir(item.id)} />
                        <Button title="✏️" color="#48494b" onPress={() => editar(item)} />
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
        flex: 1,
        backgroundColor: "#48494b",
        color: "#FFFFFF",
        padding: 10,
        marginTop: 5,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
});
//Olá casada >:)