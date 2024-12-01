import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
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
  )
}

const styles = StyleSheet.create({})