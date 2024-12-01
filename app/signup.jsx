import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
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

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.toggleText}>
          Already have an account? Login here.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Define styles for this screen
});
