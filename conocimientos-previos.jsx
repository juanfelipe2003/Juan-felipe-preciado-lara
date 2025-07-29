import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; 

const conocimientos = [
  {
    title: 'React Native',
    description: 'Manejo básico de React Native.'
  },
  {
    title: 'Componentes funcionales',
    description: 'Uso de componentes funcionales.'
  },
  {
    title: 'Expo Router',
    description: 'Conocimiento sobre navegación con Expo Router.'
  },
  {
    title: 'Estructura de proyectos',
    description: 'Estructura de carpetas y archivos en proyectos móviles.'
  },
];

const conocimientosPrevios = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Home</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButtonActive}>
          <Text style={styles.toggleTextActive}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButtonInactive}>
          <Text style={styles.toggleTextInactive}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
    
        <Image
          source={require('./assets/ilustracion.jpeg')} 
          style={styles.image}
          resizeMode="contain"
        />

        {conocimientos.map((item, idx) => (
          <Card key={idx} style={styles.card}>
            <Card.Title
              title={<Text style={styles.cardTitle}>{item.title}</Text>}
            />
            <Card.Content>
              <Text>{item.description}</Text>
              <Text style={styles.verMas}>Ver más</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 80 },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#3B5998',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 10,
  },
  toggleButtonInactive: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  toggleTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleTextInactive: {
    color: '#000',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  card: {
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verMas: {
    color: '#3B5998',
    marginTop: 8,
    fontWeight: '600',
  },
  bottomNav: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default conocimientosPrevios;