import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button, Divider } from 'react-native-paper';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Configuracion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
      <View>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 24, textAlign: 'center' }}>
          INICIAR SESIÓN
        </Text>
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          left={<TextInput.Icon icon="email-outline" />}
          mode="outlined"
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          left={<TextInput.Icon icon="lock-outline" />}
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 8 }}
        />
        <Text style={{ color: '#1976d2', marginBottom: 24, textAlign: 'right' }}>
          ¿Olvidaste tu contraseña?
        </Text>
        <Button mode="contained" style={{ marginBottom: 24 }} onPress={() => {}}>
          INICIAR SESIÓN
        </Button>
        <Divider style={{ marginVertical: 16 }} />
        <Button
          mode="outlined"
          icon={() => <MaterialCommunityIcons name="google" size={20} color="#DB4437" />}
          style={{ marginBottom: 12 }}
          onPress={() => {}}
        >
          Iniciar sesión con Google
        </Button>
        <Button
          mode="outlined"
          icon={() => <MaterialCommunityIcons name="apple" size={20} color="#000" />}
          onPress={() => {}}
        >
          Iniciar sesión con Apple
        </Button>
      </View>
    </ScrollView>
  );
}