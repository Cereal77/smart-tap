import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>ABOUT US</Text> {}
      </View>
      
      {}
      <View style={styles.leftAlignedContainer}>
        <Text style={styles.subHeading}>SMART-TAP</Text>
        <Text style={styles.descriptionText}>
        A Smart Tap Attendance system is a 
technology-driven method for tracking attendance.
It utilizes RFID (Radio Frequency Identification),
allowing users to record their attendance by tapping 
an ID card or device on a reader, ensuring quick and
accurate logging
        </Text>
        <Text style={styles.participation}>PARTICIPATION</Text>
      </View>

      {/* Member Information Section */}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')} 
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>ARCE</Text>
          <Text style={styles.role}>PROJECT MANAGER</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>CABUNAS</Text>
          <Text style={styles.role}>RELEASE MANAGER</Text>
          <Text style={styles.description}>
          Responsible for planning coordinating, and overseeing the process of launching software updates or new versions to ensure
          everything runs smoothly.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>DERRAMAS</Text>
          <Text style={styles.role}>UI/UX DESIGNER</Text>
          <Text style={styles.description}>
          I ensure smooth operation, usability, and visual excellence of user interfaces, adhering to accessibility and security best practices.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>FERNANDEZ</Text>
          <Text style={styles.role}>USER INSIGHT SPECIALIST</Text>
          <Text style={styles.description}>
          I'm in charge of creating intuitive and visually appealing interfaces.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>GALLARDO</Text>
          <Text style={styles.role}>ASSURANCE SPECIALIST</Text>
          <Text style={styles.description}>
          I'm in charge of ensuring our system meet the quality and security standards. I monitored the whole operation of our system.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>PAYAPAG</Text>
          <Text style={styles.role}>DATABASE ADMINISTATOR</Text>
          <Text style={styles.description}>
          I am responsible for ensuring thesmooth operation, performance,and security of an organization’s databases.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>PORNEL</Text>
          <Text style={styles.role}>BACK-END</Text>
          <Text style={styles.description}>
          Developing a backend for a mobileapp with RFID and OLED integration, optimizing IoT communication and ESP32 interaction.
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>TEOFILO</Text>
          <Text style={styles.role}>FRONT-END</Text>
          <Text style={styles.description}>
           I was responsible for implementing what our UI/IX Designer do to our design
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: 'center',  
    alignItems: 'center', 
    backgroundColor: '#f4f4f4',  
    padding: 20,
  },
  headingContainer: {
    alignItems: 'center', 
    marginBottom: 20,
    width: '100%', 
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#555',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 15,
  },
  participation: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#99B998', 
    padding: 15, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#347664',  
    width: '90%',
    height: '10%',  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,  
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
    color: '#111',
    marginBottom: 5,
  },
  role: {
    fontSize: 13,
    fontWeight: 'light',
    color: '#111',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});
