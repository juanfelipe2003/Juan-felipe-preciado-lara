import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PerfilUsuario() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/usuario.png')} style={styles.avatar} />
      <Text style={styles.nombre}>juan preciado</Text>
      <Text style={styles.correo}>juanpre45@gmail.com</Text>

      <View style={styles.opcionContainer}>
        <TouchableOpacity style={styles.opcion}>
          <Icon name="account-edit" size={24} color="#000" />
          <Text style={styles.textoOpcion}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Icon name="bell-outline" size={24} color="#000" />
          <Text style={styles.textoOpcion}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Icon name="cog-outline" size={24} color="#000" />
          <Text style={styles.textoOpcion}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Icon name="help-circle-outline" size={24} color="#000" />
          <Text style={styles.textoOpcion}>Ayuda</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cerrarSesion}>
        <Icon name="logout" size={24} color="red" />
        <Text style={[styles.textoOpcion, { color: 'red' }]}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  correo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
  },
  opcionContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 5,
    elevation: 3,
    marginBottom: 20,
  },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  textoOpcion: {
    fontSize: 16,
    marginLeft: 15,
  },
  cerrarSesion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '90%',
    elevation: 2,
  },
});