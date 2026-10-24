import React, { useState } from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity,ScrollView,} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { posts } from "../../../posts";
import AntDesign from '@expo/vector-icons/AntDesign';

type TamanhoLLLD = "1L" | "750ml" | "500ml";

export default function ProdutosLLLD() {


  const { idLLLD } = useLocalSearchParams<{ idLLLD: string }>();


  const produtoLLLD = posts.find(
    (itemLLLD) => String(itemLLLD.idLLLD) === idLLLD
  );
  const [tamanhoLLLD, setTamanhoLLLD] = useState<TamanhoLLLD>("1L");
  const [apertadoLLLD, setApertadoLLLD] = useState("#ffffff");
  const [exibir,setExibir]=useState<boolean>(false);
  
 function avaliar() {
    if (exibir) {
      setAvaliacao((valorAtual) => valorAtual - 1);
    } else {
      setAvaliacao((valorAtual) => valorAtual + 1);
    }

    setExibir((estadoAtual) => !estadoAtual);
  
  }
  if (!produtoLLLD) {
    return (
      <View style={styles.containerLLLD}>
      <Text>Produto não encontrado.</Text>
    </View>
  );
}
let numeroAvaliacoesLLLD=produtoLLLD.avaliacaoLLLD;
const [avaliacao,setAvaliacao]=useState<number>(numeroAvaliacoesLLLD || 0);
  const precoLLLD =
    tamanhoLLLD === "1L"
      ? produtoLLLD?.preco1lLLLD
      : tamanhoLLLD === "750ml"
      ? produtoLLLD?.preco750mlLLLD
      : produtoLLLD?.preco500mlLLLD;
  const corbotao1LLLD = tamanhoLLLD === "1L" ? "#f8b75e" : "#ffffff";
  const corbotao2LLLD = tamanhoLLLD === "750ml" ? "#f8b75e" : "#ffffff";
  const corbotao3LLLD = tamanhoLLLD === "500ml" ? "#f8b75e" : "#ffffff";
  
  return (
    <ScrollView contentContainerStyle={styles.containerLLLD}>
      <Image
        source={{ uri: produtoLLLD.imagemLLLD }}
        style={styles.imageLLLD}
      />

      <Text style={styles.nomeLLLD}>{produtoLLLD.nomeLLLD}</Text>

      <Text style={styles.avaliacaoLLLD} onPress={avaliar}>
        {exibir ? <AntDesign name="star" size={24} color="#FFDE21" /> : <AntDesign name="star" size={24} color="#ffffff" />}
        <Text style={styles.avaliacaoLLLD}>
          {" "}{produtoLLLD.estrelasLLLD} ({avaliacao})
        </Text>
      </Text>
      <Text style={styles.tituloLLLD}>Descrição</Text>
      <Text style={styles.descricaoLLLD}>
        {produtoLLLD.descriçãoLLLD}
      </Text>
  
      <Text style={styles.tituloLLLD}>Tamanho</Text>

      <View style={styles.botoesLLLD}>
            <TouchableOpacity style={[styles.botao1LLLD, { backgroundColor: corbotao1LLLD }]} onPress={() => setTamanhoLLLD("1L")}>
              <Text style={styles.textobotaoLLLD}>1L</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao2LLLD, { backgroundColor: corbotao2LLLD }]} onPress={() => setTamanhoLLLD("750ml")}>
              <Text style={styles.textobotaoLLLD}>750ml</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao3LLLD, { backgroundColor: corbotao3LLLD }]} onPress={() => setTamanhoLLLD("500ml")}>
              <Text style={styles.textobotaoLLLD}>500ml</Text>
            </TouchableOpacity>
      </View>

      <Text style={styles.tituloLLLD}>Preço</Text>
      <Text style={styles.precoLLLD}>{precoLLLD}</Text>

      <TouchableOpacity style={styles.comprarLLLD}>
        <Text style={styles.textocomprarLLLD}>Comprar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLLLD: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f6f0",
  },
  imageLLLD: {
    width:"100%",
    height: 600,
    objectFit: "contain",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#741b47",
  },
  nomeLLLD: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color: "#ffffff",
    backgroundColor: "#741b47",
    padding: 8,
    borderRadius: 4,
    fontFamily: "Arvo_700Bold",
  },
  avaliacaoLLLD: {
    fontSize: 16,
    marginVertical: 10,
    color: "#ffffff",
    backgroundColor: "#f8b75e",
    padding: 8,
    borderRadius: 4,
   fontFamily: "Arvo_400Regular",
  },
  tituloLLLD: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    fontFamily:"Arvo_700Bold",
  },
  descricaoLLLD: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Arvo_400Regular",
  },
  botoesLLLD: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  botao1LLLD: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#741b47",
  },
  botao2LLLD: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#741b47",
  },
  botao3LLLD: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#741b47",
  },
  botaoSelecionadoLLLD: {
    backgroundColor: "#f8b75e",
  },
  textobotaoLLLD: {
    fontSize: 14,
    color: "#741b47",
   fontFamily: "Arvo_400Regular",
  },
  precoLLLD: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#741b47",
    fontFamily: "Arvo_400Regular",
  },
  comprarLLLD: {
    backgroundColor: "#741b47",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  textocomprarLLLD: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arvo_400Regular",
  },
});