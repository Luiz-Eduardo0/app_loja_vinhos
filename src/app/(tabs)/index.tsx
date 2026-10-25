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
preco1lLLLD:string,
}
type TipoLLLD ="todos" | "tinto" | "branco" | "rose" | "espumante" ;
export default function AppLLLD() {
  // push - navegar para outra tela, podendo voltar
  // back - voltar para a tela anterior
  // replace - navegar para outra tela, sem poder voltar
const [pesquisaLLLD, setPesquisaLLLD] = useState('');
const [exibirtipo,setExibirtipo]= useState<TipoLLLD>("todos");
const [exibirtinto,setExibirtinto]= useState<boolean>(false);
const [exibirbranco,setExibirbranco]= useState<boolean>(false);
const [exibirrose,setExibirrose]= useState<boolean>(false);
const [exibirespumante,setExibirespumante]= useState<boolean>(false);
const [adicionar,setAdicionar]=useState<boolean>(false);
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
  function add() {
    setAdicionar(!adicionar)
  if(!adicionar){
    alert("Você adicionou esse produto no carrinho")
  }
  }


  const exibir =
  exibirtipo=== "todos"
? "todos"
: exibirtipo === "tinto"
? "tinto"
: exibirtipo === "branco"
? "branco"
: exibirtipo === "rose"
? "rosé"
: "espumante";

const corbotao1LLLD = exibir === "todos" ? "#f8b75e" : "#f5f5f5";
const corbotao2LLLD = exibir === "tinto" ? "#f8b75e" : "#f5f5f5";
const corbotao3LLLD = exibir === "branco" ? "#f8b75e" : "#f5f5f5";
const corbotao4LLLD = exibir === "rosé" ? "#f8b75e" : "#f5f5f5";
const corbotao5LLLD = exibir === "espumante" ? "#f8b75e" : "#f5f5f5";
const exibirtintoLLLD = exibirtipo === "tinto" || exibirtipo ==="todos"? "flex" : "none";
const exibirbrancoLLLD = exibirtipo === "branco"|| exibirtipo ==="todos"? "flex" : "none";
const exibirroseLLLD = exibirtipo === "rose"||exibirtipo ==="todos"?"flex" : "none";
const exibirespumanteLLLD = exibirtipo === "espumante"||exibirtipo ==="todos" ? "flex" : "none";
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
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao4LLLD }]} onPress={() => setExibirtipo("rose")}>
                  <Text style={stylesLLLD.textobotao}>rosé</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesLLLD.botao, { backgroundColor: corbotao5LLLD }]} onPress={() => setExibirtipo("espumante")}>
                  <Text style={stylesLLLD.textobotao}>espumante</Text>
                </TouchableOpacity>
          </View>
    </ScrollView>
    </View>
    <View style={[stylesLLLD.maintinto, { display: exibirtintoLLLD }]}>
    
              <View style={stylesLLLD.slot}>
              <Link href={"/produto/1"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGf7vr04JQxNMXQSyFPEdYi3KA6odQmU1bf7exwftuw&s=10"}}
                            style={stylesLLLD.imagem}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome} numberOfLines={2}>Masi Mazzano Amarone della Valpolicella Classico DOC 2004</Text>
                        <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 5.119,90</Text>
                          <TouchableOpacity onPress={add}>
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
                            source={{uri: "https://aem.lcbo.com/content/dam/lcbo/products/5/2/6/8/526871.jpg.thumb.1280.1280.jpg"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Maison Ginestet Signature Collection Grand Vin de Margaux AOP</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 499,90</Text>
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
                            source={{uri: "https://assets.wine.com/winecom/image/upload/ar_16:9,c_pad,b_white,w_1200,q_auto:good,fl_progressive/xp1elddamz5ntvhjkvjf.jpg"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>António Maçanita Fitapreta O Iluminista Tinto VR Alentejano</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 279,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOINnjM81gj7Q7SlPi8-a8W8bZ0lxRmM7vLyotpNsf_Q&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Siegel Handpicked Reserva Carmenere</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 99,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwsoVASO4dY-iNxTYcnYKhJKLs7EshBVsEVMGYfPmSwiSmDGs2zDQr_Y&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Fanti Rosso di Montalcino DOC</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 299,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z_GGpml990mw8ZPYmm92stYqthlgLXm0EMDo7hHqdg&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>CVNE Viña Real Gran Reserva Especial Rioja DOCa 2017</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 699,90</Text>
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
                            source={{uri: "https://images.tcdn.com.br/img/img_prod/1202604/90_vinho_cobos_volturno_750ml_1565_1_3d1770e4d17d560a476a326db970b479.png"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Viña Cobos Volturno 2017</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 4.999,00</Text>
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
                            source={{uri: "https://http2.mlstatic.com/D_Q_NP_2X_834754-MLB70416015666_072023-P.webp"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Kit 6 Viña Cobos Cocodrilo Corte</Text>
                         <Text style={stylesLLLD.subnome}>Tinto</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 1.385,58</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
    <View style={[stylesLLLD.mainbranco, { display: exibirbrancoLLLD }]}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/9"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://images.vivino.com/thumbs/lPgTxMKFQyCwX9ofFZP1jg_pb_600x600.png"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome} numberOfLines={2}>Domaine William Fevre Chablis Grand Cru Les Clos AOC 2018</Text>
                        <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 2.999,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2iowLb9Gz4gA7X8NCYQlqNe3puWihm7-nufQPR5TI1Gqm49jMo4jhkM&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Bojador Amphora Branco Alentejo DOC</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 399,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ALSeRspBnW90fSoAIb75ifaBPoqYjIwubocEy17XA8KW1ke6mMsVIv4M&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Niepoort Tiara Branco Douro DOC 2023</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 899,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfhIacSj2_p8MiI32VLhYTvJ50_BMp470ZfBptNCyKnMlxpalIkDJJ8M&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Siegel Handpicked Reserva Sauvignon Blanc</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 99,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1y5GOegKIDJakVCw9SL6GZx3pJHif-Fx4toorhvAvKw&s"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Viña Cobos Zingaretti Estate Chardonnay 2023</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 999,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG9agzEaMSPUpepq2VlTHGX6wgIiUgrPGL2cZVoSXoQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Zuccardi Fósil Chardonnay 2023</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 999,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckuJQt5dSvXO4OIIjQ1RWYgKLiUyZtFutMH8m-Wa5Pw&s"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Barone Montalto Maioliche Pinot Grigio Terre Siciliane IGT</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 129,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiN4s7uoRQP-k_LLNvO30Dbj8Aqi2rzPYNKZ7kl5sB_71rDjjx2nJOI8m&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>FitaPreta António Maçanita O Ancestral</Text>
                         <Text style={stylesLLLD.subnome}>Branco</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 279,90</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
    <View style={[stylesLLLD.mainrose, { display: exibirroseLLLD }]}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/17"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghHO76mic5OY9xfGqTW_djhSxUCP9FsIGc_1gWm11rw&s=10"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome} numberOfLines={2}>Masi Rosa Dei Masi Rosato Trevenezie IGT</Text>
                        <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 299,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uGoZ9lddER7rjwaQ3FgFKBv1Dz-_RSNd_oqdjPbgp5VLBc5v-xsBIOFF&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Estandon Brise Maritime Rosé Méditerranée IGP</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 139,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZgxmejMLrHGSkBBNhpmw_dFV9hP_JaeP_7Ltcc-OYQ&s"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Pulenta La Flor Malbec Rosé</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 179,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOR0hO-GYImvupbDjYubMbXlypCl7ZMpes3Shp138Ej4PBSyGJDW6_nSY&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Domaine Lafage Miraflors Côtes Catalanes IGP</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 299,90</Text>
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
                            source={{uri: "https://boccati.cdn.orangestore.cc/KhhglNGvVt1bWK5FHN9JwRoiq0M=/fit-in/456x751/filters:quality(100):fill(ffffff,1)/n49shopv2_boccatispa/images/products/679a8d07d3ede/padrao_rotulos-679a8d07d3fcc.jpg"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>laneta Rosé Sicilia DOC</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 249,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYvgmeKAA3_ox3ahC1AJhsdG7-_na0vg6zPgLkSkrMw&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Xavier Vignon Rosé Côtes du Rhône AOP</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 199,90</Text>
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
                            source={{uri: "data:image/jpeg;base64,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"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Vallado Lote de Família Touriga Nacional Rosé Douro DOC</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 189,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tk5wXBuudaCwb8B-E5oSgza1Ibv5LYUoOgzTWQ8ldQ&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Maison Brotte Eden Rosé Méditerranée IGP</Text>
                         <Text style={stylesLLLD.subnome}>Rose</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 189,90</Text>
                          <TouchableOpacity>
                            <Text style={stylesLLLD.botaocompra}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View> 
                  </Link>
        </View>
        </View>
    <View style={[stylesLLLD.mainespumante, { display: exibirespumanteLLLD }]}>
    
                <View style={stylesLLLD.slot}>
              <Link href={"/produto/25"}>
                  <View style={stylesLLLD.card}>
                      <View style={stylesLLLD.imagemfundo}>
                          <Image
                            style={stylesLLLD.imagem}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGwfN_NCND2WQGYi6Qw9H58QeUPLTG9JZTSI3L4ANtwFkp_GJt2jJ7tIr&s=10"}}
                            />
                      </View>
                      <View>
                        <Text style={stylesLLLD.nome} numberOfLines={2}>Victoria Geisse Cuvée Sofia</Text>
                        <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 1.299,00</Text>
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
                            source={{uri: "https://dcdn-us.mitiendanube.com/stores/007/784/040/products/347662298-956f23ff78de2032f917806683141065-480-0.webp"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Espumante Gramona III Lustros Gran Reserva Brut Nature 2013</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 839,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNII8NvP_6lwOLdFZaz3SSpIfetMGtC_HzUvkFOAzHw&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Espumante Rivarose Brut Rosé</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 259,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkl5P6w_kTsojYbN6N26Rdcg4M3_sN3AteEn2qKrHTveq6aex6zVlarz8&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Villa Sandi Asolo Nero Prosecco Superiore Extra Brut DOCG</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 299,90</Text>
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
                            source={{uri: "https://lovewine.je/cdn/shop/files/Villa-Sandi-Il-Fresco-Prosecco-DOC-Treviso-Brut_1400x.webp?v=1743644481"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Villa Sandi Il Fresco Prosecco DOC Treviso Brut</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 199,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuE67dkLJMFmwWFi1elzyWdar_dNZV3TBrjUIksC3VA&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Villa Sandi Il Fresco Brut Blanc de Blancs Spumante</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 159,90</Text>
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
                            source={{uri: "https://clube.evino.com.br/media/catalog/product/cache/1053fd33a3d73f5b962f4878813fa501/1/0/1000008425-standing-front.png"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Champagne Veuve A. Devaux Grande Réserve Brut</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 699,90</Text>
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
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EAHDp3maDkg-al68Ml3VXUQoeX2b7iJjoVWsSxicpzM5wfiMBJaWbKE&s=10"}}
                            />
                      </View>
                      <View>
                         <Text style={stylesLLLD.nome} numberOfLines={2}>Il Fresco Prosecco DOC Rosé Millesimato</Text>
                         <Text style={stylesLLLD.subnome}>Espumante</Text>
                      </View>
                      <View style={stylesLLLD.baixo}>
                          <Text style={stylesLLLD.preco}>R$ 199,90</Text>
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
    color: '#f8b75e',
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily:"Arvo_700Bold",
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
    fontFamily: "Arvo_400Regular",
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
    fontFamily: "Arvo_400Regular",
  },

  maintinto:{
        flexDirection: "column",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:"#741b47",
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
        width: 180,
        padding: 20,
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
        fontSize: 18,
        fontWeight:"bold",
        fontFamily: "Arvo_400Regular",
      },
      subnome:{
        fontSize: 15,
        color: "#c1c1c1",
        fontFamily: "Arvo_400Regular",
      },
      baixo:{
        marginTop: 10,
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between"
      },
      preco:{
        fontSize: 15,
        fontWeight:'bold',
        display: 'flex',
        alignItems:'center',
        fontFamily: "Arvo_400Regular",
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