import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


export default function cards (){
  return(
      <ScrollView>
        <View style={styles.main}>

            <View style={styles.slot}>
          <Link href={"/produto/1"}>
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              </Link>
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
            </View>
            <View style={styles.slot}>
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
            </View>
            <View style={styles.slot}>
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
            </View>
            <View style={styles.slot}>
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
              <View style={styles.card}>
                  <View style={styles.imagemfundo}>
                      <Image
                        style={styles.imagem}
                        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                        />
                  </View>
                  <Text style={styles.nome}><b>Casca de bala</b></Text>
                  <Text style={styles.subnome}>amostradinho</Text>
                  <View style={styles.baixo}>
                      <Text style={styles.preco}>$00,00</Text>
                      <TouchableOpacity>
                        <Text style={styles.botao}>+</Text>
                      </TouchableOpacity>
                  </View>
              </View> 
            </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
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
      
})