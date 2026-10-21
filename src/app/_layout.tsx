import { Stack } from "expo-router";
import {Button} from 'react-native';

export default function RootStackLayout() {
    return(
        <Stack screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: '#fc2e13',
            },
            headerTintColor: '#fffefe',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="index" options={{
                title: 'Home',
                headerRight: () =><Button title="Ir sobre"/>
            }}/>
            <Stack.Screen name="auth/login" options={{
                title: 'Tela de Login',
            }}/>
        </Stack>
    )
}