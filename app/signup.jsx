import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [instructorNumber, setInstructorNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); 

  const handleRegister = () => {
    if (email && password) {
      if (email.endsWith('@gmail.com')) {
        router.push("/signin");
        console.log('Valid email:', email);
      } else {
        alert('Please enter a valid Gmail address.');
      }
    } else {
      alert('Please enter both email and password.');
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      
      {/* Add Image at the top */}
      <Image 
        source={require('../assets/images/cp.png')} // Change this to your image path
        style={styles.logo} 
      />

      <Text style={styles.heading}>Register</Text>

      <View style={styles.inputBox}>
  <Text style={styles.label}>Instructor Number</Text>
  <TextInput
    style={styles.input}
    placeholder="xx-xxxx"
    placeholderTextColor="#999"
    keyboardType="number-pad"
    value={instructorNumber}
    onChangeText={(text) => {
      const filteredText = text.replace(/[^0-9-]/g, '');
      setInstructorNumber(filteredText);
    }}
  />
</View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="*******"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible} 
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons 
              name={passwordVisible ? "eye-off" : "eye"} 
              size={24} 
              color="#999" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="*******"
            placeholderTextColor="#999"
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
            <Ionicons 
              name={confirmPasswordVisible ? "eye-off" : "eye"} 
              size={24} 
              color="#999" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("signin")}>
        <Text style={styles.toggleText}>
          Already have an account? <Text style={styles.registerText}>Login here.</Text>
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
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  logo: {
    width: 120, 
    height: 120, 
    marginBottom: 30,  
    resizeMode: 'contain', 
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 40,
  },
  inputBox: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#99B998',
    fontSize: 16,
    color: '#333',
  },
  registerText: {
    color: 'blue', 
    fontSize: 14,
  },

  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
  btn: {
    width: '100%',
    padding: 10,
    backgroundColor: '#99B998',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#111',
  },
  toggleText: {
    marginTop: 30,
    color: '#111',
    fontSize: 14,
    textDecorationLine: 'none',
    marginVertical: 30,
  },
});
