import { View, ScrollView } from 'react-native';
import { Text, Button, RadioButton, TextInput, List } from 'react-native-paper';
import { useState } from 'react';
import { router, Stack } from 'expo-router';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Pantallas',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f9f8ff',
          },
        }}
      />
      <ScrollView>
        <View style={{ padding: 16 }}>
          <List.Item
             style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Autor"
            left={props => <List.Icon {...props} icon="account-circle" color='#e3f115ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("autor")}
          />
          <List.Item
             style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Inicio de sesión"
            left={props => <List.Icon {...props} icon="lock" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("inicio-sesion")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Pantalla principal"
            left={props => <List.Icon {...props} icon="home" color='#5c9ded' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("pantalla-principal")}
          />
           <List.Item
             style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Conocimientos previos"
            left={props => <List.Icon {...props} icon="brain" color='#ef1111ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("conocimientos-previos")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Lista de elementos"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-elementos")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Detalle de elemento"
            left={props => <List.Icon {...props} icon="account" color='#a97ff7' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("detalle-elemento?id=1")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Formulario de registro"
            left={props => <List.Icon {...props} icon="cog" color='#a1a1a1' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("formulario-registro")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Configuración"
            left={props => <List.Icon {...props} icon="account" color='#a1a1a1' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("configuracion")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Perfil de usuario"
            left={props => <List.Icon {...props} icon="account" color='#a1a1a1' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("perfil-usuario")}
          />
          <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Lista de servicios"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#2a3dbcff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-servicios")}
          />
           <List.Item
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              marginBottom: 18,
              height: 70,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
            }}
            title="Ayuda"
            left={props => <List.Icon {...props} icon="help-circle" color='#000000ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("ayuda")}
          />

        </View>
      </ScrollView>
    </>
  );
}