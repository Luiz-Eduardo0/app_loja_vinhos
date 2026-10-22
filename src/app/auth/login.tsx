import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginLLLD() {
  // push - navegar para outra tela, podendo voltar
  // back - voltar para a tela anterior
  // replace - navegar para outra tela, sem poder voltar

  const router = useRouter();

  const [emailLLLD, setEmailLLLD] = useState('');
  const [senhaLLLD, setSenhaLLLD] = useState('');
  const [erroLLLD, setErroLLLD] = useState('');

  const handleLoginLLLD = () => {
    setErroLLLD('');
    if (!emailLLLD.trim() || !senhaLLLD.trim()) {
      setErroLLLD('Por favor, preencha todos os campos.');
      return;
    }

    if(!emailLLLD.includes('@')) {
      setErroLLLD('Por favor, insira um email válido.');
      return;
    }

    if (senhaLLLD.length < 8) {
      setErroLLLD('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    if(emailLLLD != 'buddy@gmail.com' || senhaLLLD != 'buddy123') {
      setErroLLLD('Email ou senha incorretos.');
      return;
    }

    router.replace('../(tabs)');
  }

  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      {erroLLLD ? <Text style={styles.erro}>{erroLLLD}</Text> : null}

      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/login.jpeg')} style={styles.image} resizeMode="contain"/>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{gap: 8, marginTop: 80}}>

            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={24} color="#f8b75e" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" value={emailLLLD} 
                onChangeText={(text) => {
                    setEmailLLLD(text);
                    if (erroLLLD) setErroLLLD('');
                }}
                autoCapitalize="none" keyboardType="email-address"/>
            </View>
        

            <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={24} color="#f8b75e" style={styles.icon} />
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={senhaLLLD} 
                onChangeText={(text) => {
                    setSenhaLLLD(text);
                    if (erroLLLD) setErroLLLD('');
                }} />
            </View>
            <Text style={{color: '#c1c1c1', fontSize: 16, textAlign: 'left', marginBottom: 10}}>Mínimo de 8 caracteres</Text>

        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={handleLoginLLLD}
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
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 638 / 480,
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
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#c1c1c1',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#f8b75e',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
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
  },
  erro: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
  }
});
