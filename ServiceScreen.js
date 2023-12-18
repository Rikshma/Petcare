import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceScreen = () => {
  const navigation = useNavigation();

  const navigateToService = (service) => {
    navigation.navigate('GroomingScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.semiCircle} />
      <View style={styles.circleContainer}>
        <Image
          source={require('./assets/IMG-20231117-WA0022.jpg')} // Replace with the actual path to your cat image
          style={styles.circleImage}
        />
      </View>
      <Image
        source={require('./assets/dog.jpg')} // Replace with the actual path to your dog image
        style={styles.dogImage}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  semiCircle: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FFA500',
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 300,
  },
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 70,
    height: 70,
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
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
