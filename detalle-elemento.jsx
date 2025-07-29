import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useLocalSearchParams, useRouter } from 'expo-router';

const elementos = [
  { id: 1, titulo: 'Elemento uno', precio: '29,99', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, titulo: 'Elemento dos', precio: '19,99', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { id: 3, titulo: 'Elemento tres', precio: '39,99', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, titulo: 'Elemento cuatro', precio: '24,99', descripcion: 'Lorem ipsum dolor sit amet, consectetur.' },
];

export default function DetalleElemento() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const elemento = elementos.find(e => e.id === Number(id));

  if (!elemento) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Elemento no encontrado</Text>
        <Button mode="contained" onPress={() => router.back()}>
          Volver
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/image.png' }}
            style={styles.image}
          />
          <Text variant="titleLarge" style={styles.title}>
            {elemento.titulo}
          </Text>
          <Text variant="titleMedium" style={styles.price}>
            ${elemento.precio}
          </Text>
          <Text style={styles.description}>
            {elemento.descripcion}
          </Text>
          <Button
            mode="contained"
            onPress={() => router.back()}
            style={styles.button}
          >
            Volver
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  card: {
    elevation: 3,
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  price: {
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
  },
  error: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
});