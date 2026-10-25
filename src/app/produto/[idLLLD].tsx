import React, { useState } from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity,ScrollView,} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { banco } from "../../../banco";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type TamanhoLLLD = "1L" | "750ml" | "500ml";

export default function ProdutosLLLD() {
  const router = useRouter(); 
  
  const { idLLLD } = useLocalSearchParams<{ idLLLD: string }>();


  const produtoLLLD = banco.find(
    (itemLLLD) => String(itemLLLD.idLLLD) === idLLLD
  );
  const [tamanhoLLLD, setTamanhoLLLD] = useState<TamanhoLLLD>("1L");
  const [exibirestrelaLLLD,setExibirestrelaLLLD]=useState<boolean>(false);
  const [exibircoracaoLLLD,setExibircoracaoLLLD]=useState<boolean>(false);
  
 function avaliar() {
    if (exibirestrelaLLLD) {
      setAvaliacao((valorAtual) => valorAtual - 1);
    } else {
      setAvaliacao((valorAtual) => valorAtual + 1);
    }

    
    
    setExibirestrelaLLLD((estadoAtual) => !estadoAtual);
    
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

function curtir() {
    setExibircoracaoLLLD(!exibircoracaoLLLD)
  if(!exibircoracaoLLLD){
    alert("Você favoritou este produto")
  }
  }

  
return (
    <ScrollView contentContainerStyle={styles.containerLLLD}>
      <View style={styles.headLLLD}>
        <Text onPress={router.back}><FontAwesome5 name="arrow-left" size={24} color="black" /></Text>
        <Text onPress={curtir}>{exibircoracaoLLLD ? <AntDesign name="heart" size={24} color="red" /> : <AntDesign name="heart" size={24} color="black" /> }</Text>
      </View>
      
      <Image
        source={{ uri: produtoLLLD.imagemLLLD }}
        style={styles.imageLLLD}
      />

      <Text style={styles.nomeLLLD}>{produtoLLLD.nomeLLLD}</Text>

      <Text style={styles.avaliacaoLLLD} onPress={avaliar}>
        {exibirestrelaLLLD ? <AntDesign name="star" size={24} color="#FFDE21" /> : <AntDesign name="star" size={24} color="#ffffff" />}
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
            <TouchableOpacity style={[styles.botaoLLLD, { backgroundColor: corbotao1LLLD }]} onPress={() => setTamanhoLLLD("1L")}>
              <Text style={styles.textobotaoLLLD}>1L</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLLLD, { backgroundColor: corbotao2LLLD }]} onPress={() => setTamanhoLLLD("750ml")}>
              <Text style={styles.textobotaoLLLD}>750ml</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLLLD, { backgroundColor: corbotao3LLLD }]} onPress={() => setTamanhoLLLD("500ml")}>
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
  headLLLD:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:20,
  },
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
  botaoLLLD: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#741b47",
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