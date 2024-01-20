import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Background from '../Background';
import FooterTabs from '../FooterTabs';

const ServiceScreen = () => {
  const navigation = useNavigation();

  const navigateToService = (service) => {
    navigation.navigate(service);
  };

  return (
    <Background>
    
      <View style={styles.circleContainer}>
        <Image
          source={require('../assets/IMG-20231117-WA0022.jpg')} // Replace with the actual path to your cat image
          style={styles.circleImage}
        />
      </View>
      <View style={styles.dogImageContainer}>
      <Image
        source={require('../assets/dog.jpg')} // Replace with the actual path to your dog image
        style={styles.dogImage}
      />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateToService('Veterinary')}>
          <Text style={styles.optionText}>Veterinary surgeon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateToService('Training')}>
          <Text style={styles.optionText}>Trainer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigateToService('Grooming')}>
          <Text style={styles.optionText}>Grooming</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  dogImage: {
    marginTop: 80, // Adjust this to position the dog image correctly
    width: 325,
    height: 200,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  dogImageContainer: {
    marginTop: 80, // Adjust this to position the dog image container correctly
    width: '100%',
    
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'center', // Center the image vertically
  },
  optionsContainer: {
    marginTop: 30, // Adjust this to position the options correctly
    width: '100%',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    width: '80%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  optionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ServiceScreen;
