import {View, Text, StyleSheet  } from 'react-native';

export default function Compras() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.texto}>Compras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})