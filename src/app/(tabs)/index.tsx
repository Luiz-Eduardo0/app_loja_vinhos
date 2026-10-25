import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function AppLLLD() {
  // push - navegar para outra tela, podendo voltar
  // back - voltar para a tela anterior
  // replace - navegar para outra tela, sem poder voltar
const [pesquisaLLLD, setPesquisaLLLD] = useState('');
const [categoriaSelecionadaLLLD, setCategoriaSelecionadaLLLD] =
useState('Todos');

 const categoriasLLLD = [
    'Todos',
    'Tinto',
    'Branco',
    'Rosé',
    'Espumante',
  ];

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
        style={{ width: 45, height: 45 }}
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

    {categoriasLLLD.map((categoria) => {
       const selecionadaLLLD =
       categoriaSelecionadaLLLD === categoria;
       return (
       <TouchableOpacity
          key={categoria}
            style={[
              stylesLLLD.categoria,
              selecionadaLLLD && stylesLLLD.categoriaSelecionada,
                ]}
            onPress={() => setCategoriaSelecionadaLLLD(categoria)}>
            <Text
              style={[
                stylesLLLD.textoCategoria,
                selecionadaLLLD &&
                stylesLLLD.textoCategoriaSelecionada,
                ]}> 
                {categoria}
                 </Text>
                 </TouchableOpacity>
            );
        })}
    </ScrollView>
  </View>
   <View style={stylesLLLD.main}>
   
               <View style={stylesLLLD.slot}>
             <Link href={"/produto/1"}>
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View>
                 </Link>
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
               </View>
               <View style={stylesLLLD.slot}>
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
               </View>
               <View style={stylesLLLD.slot}>
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
               </View>
               <View style={stylesLLLD.slot}>
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
                 <View style={stylesLLLD.card}>
                     <View style={stylesLLLD.imagemfundo}>
                         <Image
                           style={stylesLLLD.imagem}
                           source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                           />
                     </View>
                     <Text style={stylesLLLD.nome}><b>Casca de bala</b></Text>
                     <Text style={stylesLLLD.subnome}>amostradinho</Text>
                     <View style={stylesLLLD.baixo}>
                         <Text style={stylesLLLD.preco}>$00,00</Text>
                         <TouchableOpacity>
                           <Text style={stylesLLLD.botao}>+</Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
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
  },
  categoria: {
    paddingVertical: 13,
    paddingHorizontal: 21,
    borderRadius: 18,
    backgroundColor: '#F3F0ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriaSelecionada: {
    backgroundColor: '#741b47',
  },
  textoCategoria: {
    fontSize: 15,
    color: '#49413E',
    fontWeight: '500',
  },
  textoCategoriaSelecionada: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  main:{
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
        fontStyle: "normal",
      },
      subnome:{
        fontSize: 15,
        color: "#c1c1c1"
      },
      baixo:{
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between"
      },
      preco:{
        fontSize: 29,
      },
      botao:{
        fontSize: 30,
        backgroundColor: "#f8b75e",
        borderRadius: 11,
        width: 45,
        paddingLeft: 12,
      },
      
});