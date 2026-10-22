import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function cards (){
    return(
        <View style={styles.main}>
            <View style={styles.card}>
                  <Image
                    style={styles.imagem}
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OBPZSX7230mrR-GiP_b51YwgBq36T1_dPRLU05dkUQ&s=10"}}
                  />
                  <text><b>Casca de bala</b></text>
                  <text>amostradinho</text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:"#fff"
      },
      card:{
        padding: 10,
        height: 250,
        width: 180,
        backgroundColor:"#000",
        borderRadius: 30,
      },
      imagem:{
        width:"100%",
        height:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,

      },
      

})