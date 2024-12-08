import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { DarkModeProvider } from './DarkModeContext'; // Import the context provider

export default function RootLayout() {
  return (
    <DarkModeProvider>  {/* Wrap the Stack with DarkModeProvider */}
      <Stack>
        <Stack.Screen 
            name='index' 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='signin' 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='signup' 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='about' 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='home' 
            options={{headerShown: false}}
        />
      </Stack>
    </DarkModeProvider>
  );
}

const styles = StyleSheet.create({});
