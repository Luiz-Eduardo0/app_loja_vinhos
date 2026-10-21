import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  // push - navegar para outra tela, podendo voltar
  // back - voltar para a tela anterior
  // replace - navegar para outra tela, sem poder voltar

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_buddy.jpeg')} style={styles.image}/>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Venha tomar um vinho com Buddy!</Text>
        <Text style={styles.texto_padrao}>Buddy é o seu amigo ideal para degustar vinhos!</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={()=>router.push('/auth/login')}
        >
          <Text style={styles.texto_botao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '60%',
    marginBottom: 'auto',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: '#741b47',
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 150,
    marginRight: 120,
  },
  texto_padrao: {
    fontSize: 24,
    marginBottom: 200,
    marginRight: 120,
  },
  botao:{
    backgroundColor: '#f8b75e',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
