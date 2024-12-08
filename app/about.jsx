import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDarkMode } from './DarkModeContext';  // Import the custom hook

export default function About() {
  const  { darkMode } = useDarkMode(); 
  const teamMembers = [
    { 
      name: 'ARCE', 
      role: 'PROJECT MANAGER', 
      description: 'John is a passionate designer focusing on user-centered design.',
      image: require('../assets/images/profile.png') 
    },
    { 
      name: 'CABUNAS', 
      role: 'RELEASE MANAGER', 
      description: 'Responsible for planning coordinating, and overseeing the process of launching software updates or new versions to ensure everything runs smoothly.',
      image: require('../assets/images/profile.png')
    },
    { 
      name: 'DERRAMAS', 
      role: 'UI/UX DESIGNER', 
      description: 'I ensure smooth operation, usability, and visual excellence of user interfaces, adhering to accessibility and security best practices.',
      image: require('../assets/images/profile.png') 
    },
    { 
      name: 'FERNANDEZ', 
      role: 'USER INSIGHT SPECIALIST', 
      description: 'Im in charge of creating intuitive and visually appealing interfaces.',
      image: require('../assets/images/profile.png') 
    },
    { 
      name: 'GALLARDO', 
      role: 'ASSURANCE SPECIALIST', 
      description: 'I ensure that our system meet the quality and security standards. I monitored the whole operation of our system.',
      image: require('../assets/images/profile.png') 
    },
    { 
      name: 'PAYAPAG', 
      role: 'DATABASE ADMINISTRATOR', 
      description: 'I am responsible for ensuring the smooth operation, performance, and security of an organization’s  databases.',
      image: require('../assets/images/profile.png') 
    },
    { 
      name: 'PORNEL', 
      role: 'BACK-END', 
      description: 'Developing a backend for a mobile app with RFID and OLED integration, optimizing IoT communication and ESP32 interaction.',
      image: require('../assets/images/profile.png') 
    },
    { 
      name: 'TEOFILO', 
      role: 'FRONT-END', 
      description: 'I am the one who is assign to implement the work of our UI/UX Designer and make it functional.',
      image: require('../assets/images/lee.jpg') 
    },
  ];

  
  return (
    <ScrollView contentContainerStyle={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]} showsVerticalScrollIndicator={false}>
      <View style={styles.headingContainer}>
        <Text style={[styles.heading, darkMode ? styles.darkText : styles.lightText]}>ABOUT US</Text>
      </View>

      <View style={styles.leftAlignedContainer}>
        <Text style={[styles.subHeading, darkMode ? styles.darkText : styles.lightText]}>SMART-TAP</Text>
        <Text style={[styles.descriptionText, darkMode ? styles.darkText : styles.lightText]}>
        A Smart Tap Attendance system is a technology-driven method for tracking attendance. It utilizes RFID (Radio Frequency Identification), allowing users to record their attendance by tapping 
        an ID card or device on a reader, ensuring quick and accurate logging.
        </Text>
        <Text style={[styles.participation, darkMode ? styles.darkText : styles.lightText]}>PARTICIPATION</Text>
      </View>

      {teamMembers.map((member, index) => (
        <View key={index} style={[styles.rectangle, darkMode ? styles.darkRectangle : styles.lightRectangle]}>
          <Image source={member.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={[styles.name, darkMode ? styles.darkHeader : styles.lightHeader]}>{member.name}</Text>
            <Text style={[styles.role, darkMode ? styles.darkText : styles.lightText]}>{member.role}</Text>
            <Text style={[styles.description, darkMode ? styles.darkText : styles.lightText]}>{member.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: 'center',  
    alignItems: 'center', 
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#f4f4f4',  
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
  headingContainer: {
    alignItems: 'center', 
    marginBottom: 20,
    width: '100%', 
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  leftAlignedContainer: {
    alignItems: 'flex-start', 
    width: '100%', 
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
  },
  participation: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15, 
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    height: 180,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,  
  },
  lightRectangle: {
    backgroundColor: '#99B998', 
    borderColor: '#347664',
  },
  darkRectangle: {
    backgroundColor: '#555',
    borderColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,  
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 14,
    fontWeight: 'light',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
  },
  contactButton: {
    marginTop: 10,
    backgroundColor: '#347664', 
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#333',
  },
  darkHeader: {
    color: '#99B998',
  },

});
