import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Card, Button } from 'react-native-paper';

const elementos = [
  { id: 1, titulo: 'Item uno', descripcion: 'Descripción del elemento. Lorem ipsum dolor sit amet.' },
  { id: 2, titulo: 'Item dos', descripcion: 'Descripción del elemento. Lorem ipsum dolor sit amet.' },
  { id: 3, titulo: 'Item tres', descripcion: 'Descripción del elemento. Lorem ipsum dolor sit amet.' },
  { id: 4, titulo: 'Item cuatro', descripcion: 'Descripción del elemento. Lorem ipsum dolor sit amet.' },
];

export default function ListaElementos() {
  const [busqueda, setBusqueda] = useState('');

  const filtrados = elementos.filter(e =>
    e.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        <Text variant="headlineMedium" style={{ marginBottom: 10 }}>Lista</Text>
        <TextInput
          placeholder="Buscar"
          value={busqueda}
          onChangeText={setBusqueda}
          style={{ marginBottom: 20 }}
        />
        {filtrados.map(item => (
          <Card key={item.id} style={{ marginBottom: 15 }}>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/image.png' }}
                style={{ width: 50, height: 50, marginRight: 15 }}
              />
              <View style={{ flex: 1 }}>
                <Text variant="titleMedium">{item.titulo}</Text>
                <Text variant="bodyMedium">{item.descripcion}</Text>
              </View>
              <Button mode="contained" style={{ marginLeft: 10 }}>Acción</Button>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}