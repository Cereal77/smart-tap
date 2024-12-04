import { StyleSheet, Text, View, ScrollView, Switch, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { FontAwesome } from 'react-native-vector-icons';  
import About from './about'; 
import SignIn from './signin'; 

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false); 

  const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);

  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      {}
      <Image
         source={require('../assets/images/cp.png')} 
        style={styles.image}
      />

      <Text style={styles.heading}>ATTENDANCE</Text>

      {}
      <View style={styles.switchContainer}>
        <Text>{isSwitchOn ? '' : ''}</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isSwitchOn}
          trackColor={{ false: '#767577', true: '#99B998' }}
          thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <ScrollView style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Student ID</Text>
          <Text style={styles.tableHeader}>Email</Text>
          <Text style={styles.tableHeader}>Status</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>12345</Text>
          <Text style={styles.tableCell}>john.doe@example.com</Text>
          <Text style={styles.tableCell}>Active</Text> {}
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>12346</Text>
          <Text style={styles.tableCell}>jane.doe@example.com</Text>
          <Text style={styles.tableCell}>Active</Text> {}
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>12345</Text>
          <Text style={styles.tableCell}>john.doe@example.com</Text>
          <Text style={styles.tableCell}>Active</Text> {}
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>12346</Text>
          <Text style={styles.tableCell}>jane.doe@example.com</Text>
          <Text style={styles.tableCell}>Active</Text> {}
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>12345</Text>
          <Text style={styles.tableCell}>john.doe@example.com</Text>
          <Text style={styles.tableCell}>Active</Text> {}
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>12346</Text>
          <Text style={styles.tableCell}>jane.doe@example.com</Text>
          <Text style={styles.tableCell}>Active</Text> {}
        </View>

        {}
      </ScrollView>

      {}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Send to Google Sheet</Text>
      </TouchableOpacity>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'About') {
            iconName = 'info-circle';
          } else if (route.name === 'Logout') {
            iconName = 'sign-out';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#eee', 
          borderTopWidth: 0, 
        },
        tabBarActiveTintColor: 'green', 
        tabBarInactiveTintColor: '#99B998', 
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="About" 
        component={About}  
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Logout" 
        component={SignIn}  
        options={{ 
          headerShown: false,
          tabBarStyle: { display: 'none' }, 
        }}
      />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    maxHeight: 400,  
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  tableHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  button: {
    marginTop: 20, 
    backgroundColor: '#99B998', 
    paddingVertical: 12,
    paddingHorizontal: 40, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#333', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});
