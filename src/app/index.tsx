import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  // push - navegar para outra tela, podendo voltar
  // back - voltar para a tela anterior
  // replace - navegar para outra tela, sem poder voltar

  const router = useRouter();

  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo_buddy.jpeg')} style={styles.image} resizeMode="contain"/>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Venha tomar um vinho com Buddy!</Text>
        <Text style={styles.texto_padrao}>Buddy é o seu amigo ideal para degustar vinhos!</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={()=>router.replace('/auth/login')}
        >
          <Text style={styles.texto_botao}>Iniciar</Text>
        </TouchableOpacity>
      </View>

    </View> 


    

  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1254 / 1254,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    backgroundColor: '#741b47',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8b75e',
  },
  texto_padrao: {
    fontSize: 18,
    color: '#c1c1c1',
  },
  botao:{
    backgroundColor: '#f8b75e',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  texto_botao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
