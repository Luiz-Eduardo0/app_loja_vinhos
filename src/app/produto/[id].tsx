import{Text, View, StyleSheet,Image,TouchableOpacity} from "react-native";
import React  from "react";
import { useLocalSearchParams} from "expo-router";
import {posts} from  "../../../posts";
import AntDesign from '@expo/vector-icons/AntDesign';
let b1=0;
let b2=0;
let b3=0;
let preco="";
let cor1="#f9f6f0";
let cor2="#f9f6f0";
let cor3="#f9f6f0";

type PostProps={
id:number,
nome:string,
estrelas:number,
avaliacao:number,
descricao:string,
imagem:string,
preco1l:string,
preco750ml:string,
preco500ml:string,
}
function Botao1(){
    b1=1;
    b2=0;
    b3=0;
    cor1="#f8b75e";
    cor2="#f8b75e";
    cor3="#f8b75e";
} 
function Botao2(){
    b1=0;
    b2=1;
    b3=0;
    cor1="#f8b75e";
    cor2="#f8b75e";
    cor3="#f8b75e";
} 
function Botao3(){
    b1=0;
    b2=0;
    b3=1;
    cor1="#f8b75e";
    cor2="#f8b75e";
    cor3="#f8b75e";
} 
export default function ProdutosLLLD({id,nome,estrelas,avaliacao,descricao,imagem,preco1l,preco750ml,preco500ml}:PostProps){
    return (
       <View style={styles.containerLLLD}>
        <View style={styles.containerLLLD}>
        <Image
                source={{uri:imagem}}
                style={styles.image}
            />
        </View>
        <View style={styles.nome}>
            <Text style={styles.textLLLD}>{nome}</Text>
            <Text style={styles.estrela}><AntDesign name="star" size={24} color="yellow" />{estrelas}</Text>
            <Text style={styles.avaliacao}>{avaliacao}</Text>

        </View>
        <View style={styles.descricao}>
            <Text style={styles.titulo}>Descrição</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.titulo}>Tamannho</Text>


        </View>
        <View style={styles.botoes}>
                <TouchableOpacity onPress={Botao1}>
                <Text style={styles.textobotao}>1L</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Botao2}>
                <Text style={styles.textobotao}>750ml</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={Botao3}>
                <Text style={styles.textobotao}>500ml</Text>

                </TouchableOpacity>

        </View>

        <View style={styles.preco }>
            <Text style={styles.titulo}>Preço</Text>
            if(b1==1){
            preco=preco1l
        } 
        else if(b2==1){
            preco=preco750ml
        }
        else if(b3==1){
            preco=preco500ml
        }
            <Text style={styles.preco}>{preco}</Text>

        </View>
        <View style={styles.comprar}>
            <TouchableOpacity>
                <Text style={styles.textocomprar}>Comprar</Text>
            </TouchableOpacity>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    containerLLLD: {
        flex: 1,
    },
    textLLLD: {
        fontSize: 20,
        fontWeight: "bold",
    },
    image:{
        width:'100%',
        height:400,
    },  
    nome :{},
    estrela:{},
    avaliacao:{},
    descricao:{},
    titulo:{},
    botoes:{},
    textobotao:{
        fontSize: 12,
        color:"#741b47",
    },
    preco:{},
    comprar:{},
    textocomprar:{},
});