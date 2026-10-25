import { View, Text, Image, StyleSheet } from 'react-native';

export default function Favoritos() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos do Buddy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});