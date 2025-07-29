import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const servicios = [
  {
    id: '1',
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Abrir servicios telefónicos para alertas de dispositivos para mejorar la notificación en tiempo real de',
    icono: 'phone',
    color: '#A5E887'
  },
  {
    id: '2',
    titulo: 'Protección inteligente',
    descripcion: 'Aplicación de alarma para el hogar, protegiendo la seguridad de tu hogar',
    icono: 'shield',
    color: '#A8E6FB'
  },
  {
    id: '3',
    titulo: 'Compras',
    descripcion: 'Encuentra rápidamente productos y marcas, descubre más productos inteligentes',
    icono: 'cart',
    color: '#FFD8A8'
  },
  {
    id: '4',
    titulo: 'Maestro de iluminación',
    descripcion: 'Proporcione soluciones de iluminación personalizadas basadas en IA',
    icono: 'lightbulb-on',
    color: '#E4C6FD'
  },
  {
    id: '5',
    titulo: 'Asistente de voz de terceros',
    descripcion: 'Utiliza Alexa, voces preconfiguradas...',
    icono: 'microphone',
    color: '#C0F0F0'
  }
];

export default function ListaServicios() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de servicios</Text>
      <FlatList
        data={servicios}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <Icon name={item.icono} size={24} color="#fff" />
            </View>
            <View style={styles.textoContainer}>
              <Text style={styles.itemTitulo}>{item.titulo}</Text>
              <Text style={styles.itemDescripcion}>{item.descripcion}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#999" />
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 1
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  textoContainer: {
    flex: 1
  },
  itemTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4
  },
  itemDescripcion: {
    fontSize: 13,
    color: '#555'
  }
});