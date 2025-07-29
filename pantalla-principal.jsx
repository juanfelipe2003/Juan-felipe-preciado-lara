import { View, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function PantallaPrincipal() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' }}>
      <View style={{ alignItems: 'center', backgroundColor: '#fff', flex: 1 }}>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>
          ¡Bienvenido!
        </Text>
        <Text style={{ color: '#666', marginBottom: 24, textAlign: 'center', fontSize: 16 }}>
          ¡Nos alegra tenerte aqui!
        </Text>
        <Image
          source={{ uri: 'https://www.pngkey.com/png/detail/957-9575294_robot-welcome.png' }}
          style={{ width: 200, height: 200, marginBottom: 32 }}
          resizeMode="contain"
        />
        <Button mode="contained" style={{ width: '100%', marginTop: 16 }}>
          Empezar
        </Button>
      </View>
    </ScrollView>
  );
}