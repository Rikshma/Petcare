import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from './Pages/HomeScreen';
import ServiceScreen from './Pages/ServiceScreen';
import SignUpScreen from './Pages/SignUpScreen';
import VeterinarianListScreen from './Pages/Vet';
import ReminderScreen from './Pages/ReminderScreen';
import ProfileScreen from './Pages/ProfileScreen';
import LoginScreen from './Pages/LoginScreen';
// import TrainerScreen from './Pages/TrainerScreen'; // Assuming you have this
// import GroomingScreen from './Pages/GroomingScreen'; // Assuming you have this

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: 'white' } }}>
      <Tab.Screen
        name="ServiceScreen"
        component={ServiceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Veterinary"
        component={VeterinarianListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="stethoscope" size={size} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Remainder"
        component={ReminderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false, }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
