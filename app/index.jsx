import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; 

export default function Index() {
  const navigation = useNavigation(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('signin'); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {}
      <Image 
        source={require('../assets/images/Mobile.png')} 
        style={styles.image}
      />
      <Text style={styles.text}>Welcome to Smart-Tap</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',  
    paddingTop: 150,  
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
