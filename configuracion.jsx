import React, { useState } from 'react';
import { View, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Ajustes</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Cuenta</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>

        <View style={styles.item}>
          <Text style={styles.itemText}>Notificaciones</Text>
          <Switch
            value={notificaciones}
            onValueChange={setNotificaciones}
            trackColor={{ false: '#ccc', true: '#3B82F6' }}
            thumbColor="#fff"
          />
        </View>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacidad</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Seguridad</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Ayuda</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  logout: {
    marginTop: 40,
    alignItems: 'center',
  },
  logoutText: {
    color: '#607D8B', 
    fontSize: 16,
  },
});