import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import { posts } from "../../../posts";
import AntDesign from "@expo/vector-icons/AntDesign";

type Tamanho = "1L" | "750ml" | "500ml";

export default function ProdutosLLLD() {
  // Recupera o ID da rota dinâmica
  const { id } = useLocalSearchParams<{ id: string }>();

  // Busca o produto correspondente ao ID
  const produto = posts.find(
    (item) => String(item.id) === id
  );

  // Armazena o tamanho escolhido
  const [tamanho, setTamanho] = useState<Tamanho>("1L");

  // Trata o caso em que o produto não existe
  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  // Determina o preço de acordo com o tamanho
  const preco =
    tamanho === "1L"
      ? produto.preco1l
      : tamanho === "750ml"
      ? produto.preco750ml
      : produto.preco500ml;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: produto.imagem }}
        style={styles.image}
      />

      <Text style={styles.nome}>{produto.nome}</Text>

      <Text style={styles.avaliacao}>
        <AntDesign name="star" size={20} color="#f8b75e" />
        {" "}{produto.estrelas} ({produto.avaliacao} avaliações)
      </Text>

      <Text style={styles.titulo}>Descrição</Text>
      <Text style={styles.descricao}>
        {produto.descricao}
      </Text>

      <Text style={styles.titulo}>Tamanho</Text>

      <View style={styles.botoes}>
        {(["1L", "750ml", "500ml"] as Tamanho[]).map(
          (opcao) => (
            <TouchableOpacity
              key={opcao}
              onPress={() => setTamanho(opcao)}
              style={[
                styles.botao,
                tamanho === opcao && styles.botaoSelecionado,
              ]}
            >
              <Text style={styles.textobotao}>
                {opcao}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Text style={styles.titulo}>Preço</Text>
      <Text style={styles.preco}>{preco}</Text>

      <TouchableOpacity
        style={styles.comprar}
        onPress={() => {
          // Adicione aqui a lógica de compra.
        }}
      >
        <Text style={styles.textocomprar}>Comprar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f6f0",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  avaliacao: {
    fontSize: 16,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
  },
  botoes: {
    flexDirection: "row",
    gap: 10,
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#741b47",
  },
  botaoSelecionado: {
    backgroundColor: "#f8b75e",
  },
  textobotao: {
    fontSize: 14,
    color: "#741b47",
  },
  preco: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#741b47",
  },
  comprar: {
    backgroundColor: "#741b47",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  textocomprar: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});