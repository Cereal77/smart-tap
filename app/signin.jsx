import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login logic
  const handleLogin = () => {
    if (email && password) {
      // Navigate to Home screen when login is successful
      navigation.navigate('Home'); // Ensure the HomeScreen is in the navigation stack
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
       
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("signup")}>
        <Text style={styles.toggleText}>
          Don't have an account? Register here.
        </Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#09292C',
      paddingHorizontal: 30,
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 30,
    },
    inputBox: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#1C7E94',
      fontSize: 16,
      color: '#333',
    },
    btn: {
      width: '100%',
      padding: 15,
      backgroundColor: '#1C7E94',
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 10,
    },
    btnText: {
      fontSize: 18,
      color: '#fff',
    },
    toggleText: {
      marginTop: 20,
      color: '#fff',
      fontSize: 14,
      textDecorationLine: 'underline',
      marginVertical: 30,
    },
    orText: {
      marginVertical: 10,
      color: '#fff',
      fontSize: 14,
    },
    socialIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      width: '60%',
    },
    iconContainer: {
      borderWidth: 1,
      borderColor: '#dddddd',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 40,
      marginHorizontal: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  });
  
