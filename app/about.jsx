import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')} 
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
          </Text>
        </View>
      </View>

      {}
      <View style={styles.rectangle}>
        <Image 
          source={require('../assets/images/profile.png')}  
          style={styles.image} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee</Text>
          <Text style={styles.role}>Pogi</Text>
          <Text style={styles.description}>
            John is a passionate designer who focuses on user-centered design, making sure every interaction is seamless and enjoyable.
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
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',  
    width: '90%',  
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
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
