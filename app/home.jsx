import { StyleSheet, Text, View, ScrollView, Switch, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';
import About from './about';
import SignIn from './signin';
import { useDarkMode } from './DarkModeContext';  

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();  
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);

  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const data = [
    { id: '22-00959', name: 'Teofilo', date: '12/11/24' },
    { id: '22-00960', name: 'Carlos', date: '12/11/24' },
    { id: '22-00961', name: 'Maria', date: '12/11/24' },
    { id: '22-00962', name: 'Juan', date: '12/11/24' },
    { id: '22-00963', name: 'Pedro', date: '12/11/24' },
    { id: '22-00964', name: 'Sofia', date: '12/11/24' },
    { id: '22-00965', name: 'Ana', date: '12/11/24' },
    { id: '22-00966', name: 'Luis', date: '12/11/24' },
    { id: '22-00967', name: 'Maria', date: '12/11/24' },
    { id: '22-00968', name: 'Carlos', date: '12/11/24' },
    
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Image source={require('../assets/images/cp.png')} style={styles.image} />
      <Text style={[styles.heading, darkMode ? styles.darkText : styles.lightText]}>ATTENDANCE</Text>

      <View style={styles.switchContainer}>
        <Switch
          onValueChange={toggleSwitch}
          value={isSwitchOn}
          trackColor={{ false: '#767577', true: '#99B998' }}
          thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <ScrollView style={styles.table}>
        {/* Table Header */}
        <View style={[styles.tableRow, darkMode ? styles.darkTableHeader : styles.lightTableHeader]}>
          <Text style={[styles.tableHeader, darkMode ? styles.darkText : styles.lightText]}>Student ID</Text>
          <Text style={[styles.tableHeader, darkMode ? styles.darkText : styles.lightText]}>Name</Text>
          <Text style={[styles.tableHeader, darkMode ? styles.darkText : styles.lightText]}>Date</Text>
        </View>

        {/* Table Data */}
        {currentRows.map((row) => (
          <View key={row.id} style={[styles.tableRow, darkMode ? styles.darkTableRow : styles.lightTableRow]}>
            <Text style={[styles.tableCell, darkMode ? styles.darkText : styles.lightText]}>{row.id}</Text>
            <Text style={[styles.tableCell, darkMode ? styles.darkText : styles.lightText]}>{row.name}</Text>
            <Text style={[styles.tableCell, darkMode ? styles.darkText : styles.lightText]}>{row.date}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        <TouchableOpacity 
          onPress={prevPage} 
          style={[styles.pageButton, darkMode ? styles.darkPageButton : styles.lightPageButton]}
        >
          <Text style={[styles.pageButtonText, darkMode ? styles.darkPageButtonText : styles.lightPageButtonText]}>
            Previous
          </Text>
        </TouchableOpacity>

        <Text style={[styles.pageIndicator,  darkMode ? styles.darkPageIndicator : styles.lightdarkPageIndicator ]}>Page {currentPage} of {totalPages}</Text>

        <TouchableOpacity 
          onPress={nextPage} 
          style={[styles.pageButton, darkMode ? styles.darkPageButton : styles.lightPageButton]}
        >
          <Text style={[styles.pageButtonText, darkMode ? styles.darkPageButtonText : styles.lightPageButtonText]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]}
        onPress={handleButtonPress}
      >
        <Text style={[styles.buttonText, darkMode ? styles.darkButtonText : styles.lightButtonText]}>
          Send to Google Sheet
        </Text>
      </TouchableOpacity>

      

      <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeButton}>
        <FontAwesome name={darkMode ? 'sun-o' : 'moon-o'} size={20} color={darkMode ? 'yellow' : 'white'} />
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
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333', 
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
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    backgroundColor: '#ggg',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#99B998',
    padding: 10,
    maxHeight: 400,  
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#111',
    paddingVertical: 10,
  },
  darkTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  lightTableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#99B998',
  },
  darkTableHeader: {
    flexDirection: 'row',
    backgroundColor: '#444',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#99B998',
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
  darkButton: {
    marginTop: 20, 
    backgroundColor: '#eee', 
    paddingVertical: 12,
    paddingHorizontal: 40, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  darkButtonText: {
    color: 'green', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  darkModeButton: {
    position: 'absolute',
    top: 20, 
    right: 20, 
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  pageButton: {
    padding: 10,
    backgroundColor: '#99B998',
    borderRadius: 5,
  },
  pageButtonText: {
    color: '#111',
    fontSize: 13,
  },
  darkPageButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  darkPageButtonText: {
    color: 'green',
    fontSize: 13,
  },
  pageIndicator: {
    fontSize: 16,
    color: '#333',
  },
  darkPageIndicator: {
    fontSize: 16,
    color: 'white',
  },
});

