import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Register logic
  const handleRegister = () => {
    if (password === confirmPassword) {
      // Registration logic here, such as calling an API
      alert('Registration Successful!');
      navigation.navigate('Login'); // Redirect to login screen after registration
    } else {
      alert("Passwords do not match! Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>

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

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("signin") }>
        <Text style={styles.toggleText}>
          Don't have an account? Login here.
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
  