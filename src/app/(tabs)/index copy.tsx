import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { banco } from "../../../banco";

// Tipo que representa os dados de cada produto.
type BancoProps = {
  idLLLD: number;
  tipoLLLD: string;
  nomeLLLD: string;
  estrelasLLLD: number;
  avaliacaoLLLD: number;
  descriçãoLLLD: string;
  imagemLLLD: string;
  preco1lLLLD: number;
};

// Categorias que podem ser selecionadas.
type TipoLLLD =
  | "todos"
  | "tinto"
  | "branco"
  | "rosé"
  | "espumante";

// Normaliza textos para comparar categorias com ou sem acentos.
function normalizarLLLD(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

export default function AppLLLD() {
  // Guarda a categoria atualmente selecionada.
  const [exibirtipo, setExibirtipo] =
    useState<TipoLLLD>("todos");

  // Seleciona os produtos de acordo com a categoria.
  const produtosFiltrados = (banco as BancoProps[]).filter(
    (produto) => {
      const correspondeTipo =
        exibirtipo === "todos" ||
        normalizarLLLD(produto.tipoLLLD) ===
          normalizarLLLD(exibirtipo);

      return correspondeTipo;
    }
  );

  return (
    <ScrollView
      style={stylesLLLD.scroll}
      contentContainerStyle={stylesLLLD.scrollConteudo}
    >
      <View style={stylesLLLD.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#741b47"
        />

        {/* CABEÇALHO DA LOJA */}
        <View style={stylesLLLD.header}>
          <View style={stylesLLLD.headerSuperior}>
            <Text style={stylesLLLD.nomeLoja}>
              Adega de Vinhos Buddy
            </Text>

            <View style={stylesLLLD.logo}>
              <Image
                source={require("../../../assets/logo_buddy.jpeg")}
                style={stylesLLLD.imagemLogo}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* BARRA DE PESQUISA VISUAL, SEM FUNCIONALIDADE */}
        <View style={stylesLLLD.areaPesquisa}>
          <View style={stylesLLLD.barraPesquisa}>
            <Ionicons
              name="search-outline"
              size={25}
              color="#333333"
            />

            <TextInput
              style={stylesLLLD.input}
              placeholder="Buscar vinhos"
              placeholderTextColor="#999999"
              editable={false}
            />

            <TouchableOpacity
              style={stylesLLLD.botaoFiltro}
              activeOpacity={1}
            >
              <Ionicons
                name="options-outline"
                size={25}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTÕES DE CATEGORIA */}
        <View style={stylesLLLD.areaCategorias}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
              stylesLLLD.listaCategorias
            }
          >
            {/* TODOS */}
            <TouchableOpacity
              style={[
                stylesLLLD.categoria,
                exibirtipo === "todos" &&
                  stylesLLLD.categoriaSelecionada,
              ]}
              onPress={() => setExibirtipo("todos")}
            >
              <Text
                style={[
                  stylesLLLD.textoCategoria,
                  exibirtipo === "todos" &&
                    stylesLLLD.textoCategoriaSelecionada,
                ]}
              >
                Todos
              </Text>
            </TouchableOpacity>

            {/* TINTO */}
            <TouchableOpacity
              style={[
                stylesLLLD.categoria,
                exibirtipo === "tinto" &&
                  stylesLLLD.categoriaSelecionada,
              ]}
              onPress={() => setExibirtipo("tinto")}
            >
              <Text
                style={[
                  stylesLLLD.textoCategoria,
                  exibirtipo === "tinto" &&
                    stylesLLLD.textoCategoriaSelecionada,
                ]}
              >
                Tinto
              </Text>
            </TouchableOpacity>

            {/* BRANCO */}
            <TouchableOpacity
              style={[
                stylesLLLD.categoria,
                exibirtipo === "branco" &&
                  stylesLLLD.categoriaSelecionada,
              ]}
              onPress={() => setExibirtipo("branco")}
            >
              <Text
                style={[
                  stylesLLLD.textoCategoria,
                  exibirtipo === "branco" &&
                    stylesLLLD.textoCategoriaSelecionada,
                ]}
              >
                Branco
              </Text>
            </TouchableOpacity>

            {/* ROSÉ */}
            <TouchableOpacity
              style={[
                stylesLLLD.categoria,
                exibirtipo === "rosé" &&
                  stylesLLLD.categoriaSelecionada,
              ]}
              onPress={() => setExibirtipo("rosé")}
            >
              <Text
                style={[
                  stylesLLLD.textoCategoria,
                  exibirtipo === "rosé" &&
                    stylesLLLD.textoCategoriaSelecionada,
                ]}
              >
                Rosé
              </Text>
            </TouchableOpacity>

            {/* ESPUMANTE */}
            <TouchableOpacity
              style={[
                stylesLLLD.categoria,
                exibirtipo === "espumante" &&
                  stylesLLLD.categoriaSelecionada,
              ]}
              onPress={() => setExibirtipo("espumante")}
            >
              <Text
                style={[
                  stylesLLLD.textoCategoria,
                  exibirtipo === "espumante" &&
                    stylesLLLD.textoCategoriaSelecionada,
                ]}
              >
                Espumante
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* CARDS GERADOS A PARTIR DE BANCO */}
        <View style={stylesLLLD.gradeProdutos}>
          {produtosFiltrados.map((produto) => (
            <Link
              key={produto.idLLLD}
              href={{
                pathname: "/produto/[idLLLD]",
                params: {
                  idLLLD: String(produto.idLLLD),
                },
              }}
              asChild
            >
              <TouchableOpacity
                style={stylesLLLD.cardContainer}
              >
                <View style={stylesLLLD.card}>
                  {/* IMAGEM DO PRODUTO */}
                  <View style={stylesLLLD.imagemfundo}>
                    <Image
                      style={stylesLLLD.imagem}
                      source={{
                        uri: produto.imagemLLLD,
                      }}
                      resizeMode="contain"
                    />
                  </View>

                  {/* NOME E CATEGORIA */}
                  <View style={stylesLLLD.informacoes}>
                    <Text
                      style={stylesLLLD.nome}
                      numberOfLines={2}
                    >
                      {produto.nomeLLLD}
                    </Text>

                    <Text style={stylesLLLD.subnome}>
                      {produto.tipoLLLD}
                    </Text>
                  </View>

                  {/* PREÇO E BOTÃO VISUAL */}
                  <View style={stylesLLLD.baixo}>
                    <Text style={stylesLLLD.preco}>
                      {produto.preco1lLLLD.toLocaleString(
                        "pt-BR",
                        {
                          style: "currency",
                          currency: "BRL",
                        }
                      )}
                    </Text>

                    <View style={stylesLLLD.botao}>
                      <Text style={stylesLLLD.textoMais}>
                        +
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))}

          {/* MENSAGEM QUANDO NÃO EXISTEM PRODUTOS */}
          {produtosFiltrados.length === 0 && (
            <Text style={stylesLLLD.mensagemVazia}>
              Nenhum produto encontrado nesta categoria.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const stylesLLLD = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollConteudo: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 210,
    backgroundColor: "#741b47",
    paddingHorizontal: 28,
    paddingTop: 25,
  },

  headerSuperior: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nomeLoja: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  logo: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#f8b75e",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },

  imagemLogo: {
    width: 45,
    height: 45,
  },

  areaPesquisa: {
    marginTop: -30,
    paddingHorizontal: 22,
    zIndex: 1,
  },

  barraPesquisa: {
    height: 68,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 6,
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
    marginLeft: 13,
  },

  botaoFiltro: {
    width: 56,
    height: 56,
    borderRadius: 17,
    backgroundColor: "#741b47",
    alignItems: "center",
    justifyContent: "center",
  },

  areaCategorias: {
    marginTop: 27,
    paddingBottom: 15,
  },

  listaCategorias: {
    paddingHorizontal: 22,
    gap: 12,
  },

  categoria: {
    paddingVertical: 13,
    paddingHorizontal: 21,
    borderRadius: 18,
    backgroundColor: "#F3F0ED",
    justifyContent: "center",
    alignItems: "center",
  },

  categoriaSelecionada: {
    backgroundColor: "#741b47",
  },

  textoCategoria: {
    fontSize: 15,
    color: "#49413E",
    fontWeight: "500",
  },

  textoCategoriaSelecionada: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  gradeProdutos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#741b47",
  },

  cardContainer: {
    width: "48%",
    marginBottom: 16,
  },

  card: {
    width: "100%",
    height: 350,
    padding: 12,
    backgroundColor: "#f9f6f0",
    borderRadius: 25,
    justifyContent: "space-between",
  },

  imagemfundo: {
    height: 180,
    marginBottom: 12,
  },

  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },

  subnome: {
    fontSize: 14,
    color: "#888888",
    marginTop: 5,
  },

  baixo: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  preco: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#741b47",
  },

  botao: {
    width: 35,
    height: 35,
    backgroundColor: "#f8b75e",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },

  textoMais: {
    fontSize: 27,
    lineHeight: 32,
    color: "#741b47",
  },

  mensagemVazia: {
    color: "#FFFFFF",
    padding: 16,
    fontSize: 16,
  },
});