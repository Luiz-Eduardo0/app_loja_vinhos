import React,{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter,Link } from 'expo-router';
import{banco} from "../../../banco"
import { JumpingTransition } from 'react-native-reanimated';
type BancoProps={
idLLLD:number,
tipoLLLD:string,
nomeLLLD:string,
estrelasLLLD:number,
avaliacaoLLLD:number,
descriçãoLLLD:string,
imagemLLLD:string,
preco1lLLLD:number,
}
type TipoLLLD ="todos" | "tinto" | "branco" | "rosé" | "espumante" ;
export default function AppLLLD() {
  // push - navegar para outra tela, podendo voltar
  // back - voltar para a tela anterior
  // replace - navegar para outra tela, sem poder voltar
const [pesquisaLLLD, setPesquisaLLLD] = useState('');
const [exibirtipo,setExibirtipo]=useState<TipoLLLD>("todos");
const [exibirtinto,setExibirtinto]=useState<boolean>(false);
const [exibirbranco,setExibirbranco]=useState<boolean>(false);
const [exibirrose,setExibirrose]=useState<boolean>(false);
const [exibirespumante,setExibirespumante]=useState<boolean>(false);
function tinto() {
    setExibirtinto(!exibirtinto)
  if(!exibirtinto){
  }
  }
function branco() {
    setExibirbranco(!exibirbranco)
  if(!exibirbranco){
  }
  }
function rose() {
    setExibirrose(!exibirrose)
  if(!exibirrose){
  }
  }
function espumante() {
    setExibirespumante(!exibirespumante)
  if(!exibirespumante){
  }
  }


  const exibir =
  exibirtipo=== "todos"
? "todos"
: exibirtipo === "tinto"
? "tinto"
: exibirtipo === "branco"
? "branco"
: exibirtipo === "rosé"
? "rosé"
: "espumante";

const corbotao1LLLD = exibir === "todos" ? "#f8b75e" : "#f5f5f5";
const corbotao2LLLD = exibir === "tinto" ? "#f8b75e" : "#f5f5f5";
const corbotao3LLLD = exibir === "branco" ? "#f8b75e" : "#f5f5f5";
const corbotao4LLLD = exibir === "rosé" ? "#f8b75e" : "#f5f5f5";
const corbotao5LLLD = exibir === "espumante" ? "#f8b75e" : "#f5f5f5";
return (
<ScrollView>
  <View style={stylesLLLD.container}>
   <StatusBar barStyle="light-content"/>
    <View style={stylesLLLD.header}>
    <View style={stylesLLLD.headerSuperior}>
    <Text style={stylesLLLD.nomeLoja}>Adega de Vinhos Buddy</Text>
     <View style={stylesLLLD.logo}>
      <Image
        source={require('../../../assets/logo_buddy.jpeg')}
        style={{ width: 58, height: 58, borderRadius: 10 }}
        resizeMode="contain"></Image>
        </View>
          </View>
      </View>

  <View style={stylesLLLD.areaPesquisa}>
    <View style={stylesLLLD.barraPesquisa}>
     <Ionicons
        name="search-outline"
        size={25}
        color="#333333"/>

  <TextInput
     style={stylesLLLD.input}
     placeholder="Buscar vinhos"
     placeholderTextColor="#999999"
     value={pesquisaLLLD}
     onChangeText={setPesquisaLLLD}/>
    <TouchableOpacity
        style={stylesLLLD.botaoFiltro}>
    <Ionicons
    name="options-outline"
    size={25}
    color="#FFFFFF"/>
    </TouchableOpacity>
        </View>
      </View>
      
  <View style={stylesLLLD.areaCategorias}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={stylesLLLD.listaCategorias}>

    <View style={stylesLLLD.botoes}>
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao1LLLD }]} onPress={() => setExibirtipo("todos")}>
                  <Text style={stylesLLLD.textobotao}>todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao2LLLD }]} onPress={() => setExibirtipo("tinto")}>
                  <Text style={stylesLLLD.textobotao}>tinto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao3LLLD }]} onPress={() => setExibirtipo("branco")}>
                  <Text style={stylesLLLD.textobotao}>branco</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao4LLLD }]} onPress={() => setExibirtipo("rosé")}>
                  <Text style={stylesLLLD.textobotao}>rosé</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao5LLLD }]} onPress={() => setExibirtipo("espumante")}>
                  <Text style={stylesLLLD.textobotao}>espumante</Text>
                </TouchableOpacity>
          </View>
    </ScrollView>
    </View>
    <View style={stylesLLLD.maintinto}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/1"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome}>Casca de bala</Text>
                        <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  </Link>
                  <Link href={"/produto/2"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/3"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/4"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                            </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/5"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/6"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link> 
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/7"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                  <Link href={"/produto/8"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
    <View style={stylesLLLD.mainbranco}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/9"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome}>Casca de bala</Text>
                        <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  </Link>
                  <Link href={"/produto/10"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/11"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/12"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                            </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/13"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/14"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link> 
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/15"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                  <Link href={"/produto/16"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
    <View style={stylesLLLD.mainrose}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/17"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome}>Casca de bala</Text>
                        <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  </Link>
                  <Link href={"/produto/18"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/19"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/20"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                            </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/21"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/22"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link> 
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/23"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                  <Link href={"/produto/24"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
    <View style={stylesLLLD.mainespumante}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/25"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome}>Casca de bala</Text>
                        <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  </Link>
                  <Link href={"/produto/26"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/27"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/28"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                            </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/29"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
               <Link href={"/produto/30"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link> 
                </View>
                <View style={stylesLLLD.slot}>
                  <Link href={"/produto/31"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
                  <Link href={"/produto/32"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome}>Casca de bala</Text>
                         <Text style={stylesLLLD.subnome}>amostradinho</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>$00,00</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
</View>
   </ScrollView>
  );
}

const stylesLLLD = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 210,
    backgroundColor: '#741b47',
    paddingHorizontal: 28,
    paddingTop: 25,
  },
  headerSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nomeLoja: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },
  logo: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#f8b75e',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  areaPesquisa: {
    marginTop: -30,
    paddingHorizontal: 22,
    zIndex: 1,
  },
  barraPesquisa: {
    height: 68,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 6,
    elevation: 5,
    shadowColor: '#FFFF',
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
    color: '#333333',
    marginLeft: 13,
  },
  botaoFiltro: {
    width: 56,
    height: 56,
    borderRadius: 17,
    backgroundColor: '#741b47',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaCategorias: {
    marginTop: 27,
    paddingBottom: 15,
  },
  listaCategorias: {
    paddingHorizontal: 22,
    gap: 12,
    backgroundColor:"#f5f5f5",
  },
  botoes:{
    flexDirection:"row",
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#f5f5f5",
  },
   botao: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    backgroundColor:"#f5f5f5",
  },
  
  textobotao: {
    fontSize: 15,
    color: '#49413E',
    fontWeight: '500',
  },

  maintinto:{
        flexDirection: "column",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:"#741b47"
      },
  mainbranco:{
        flexDirection: "column",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:"#741b47"
      },
  mainrose:{
        flexDirection: "column",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:"#741b47"
      },
  mainespumante:{
        flexDirection: "column",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:"#741b47"
      },
      slot:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 30,
      },
      card:{
        padding: 25,
        height: 350,    
        backgroundColor:"#f9f6f0",
        borderRadius: 30,
        justifyContent:"space-between",
      },
      imagemfundo:{
        height: 180,
        marginBottom: 15,
      },
      imagem:{
        width:"100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
      },
      nome:{
        fontSize: 20,
        fontWeight:"bold",
      },
      subnome:{
        fontSize: 15,
        color: "#c1c1c1"
      },
      baixo:{
        marginTop: 10,
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between"
      },
      preco:{
        fontSize: 24,
        fontWeight:'bold',
        display: 'flex',
        alignItems:'center',
      },
      botaocompra:{
        fontSize: 30,
        backgroundColor: "#f8b75e",
        borderRadius: 11,
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent:'center',
        alignItems: "flex-end",
      },
});