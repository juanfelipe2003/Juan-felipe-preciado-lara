import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const ayuda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda</Text>
      <Text style={styles.text}>
        Si tienes dudas o problemas con el uso de esta aplicación, puedes comuicarte con el estudiante encaragado del desarrollo de esta.{"\n\n"}
        Nombre: juan felipe preciado lara{"\n"}
        Email: menlara14@gmail.com{"\n"}
        Asignatura: Desarrollo de Aplicaciones Móviles{"\n"}
        Programa: Ingeniería de Sistemas
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  text: { fontSize: 16, lineHeight: 24 }
});

export default ayuda;