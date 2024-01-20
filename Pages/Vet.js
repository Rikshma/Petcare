import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';

// Updated dummy data array with descriptions
const veterinarians = [
  {
    id: '1',
    name: 'Dr. Jane Doe',
    phoneNumber: '123-456-7890',
    description: 'Expert in small animal care and emergency services.'
  },
  {
    id: '2',
    name: 'Dr. John Smith',
    phoneNumber: '098-765-4321',
    description: 'Specializes in exotic pets and wildlife.'
  },
  // Two additional records
  {
    id: '3',
    name: 'Dr. Emily Taylor',
    phoneNumber: '555-123-4567',
    description: 'Passionate about feline medicine and nutrition.'
  },
  {
    id: '4',
    name: 'Dr. Luke Rodriguez',
    phoneNumber: '555-987-6543',
    description: 'Dedicated to canine orthopedics and rehabilitation.'
  }
];

const makeCall = (phoneNumber) => {
  let phoneLink = `tel:${phoneNumber}`;

  // Check if device supports making a phone call
  if (Platform.OS !== 'android' && Platform.OS !== 'ios') {
    alert('This platform does not support phone calls.');
    return;
  }

  Linking.canOpenURL(phoneLink)
    .then(supported => {
      if (!supported) {
        console.log("Can't handle phone link");
      } else {
        return Linking.openURL(phoneLink);
      }
    })
    .catch(err => console.error('An error occurred', err));
};

const VeterinarianCard = ({ name, phoneNumber, description }) => (
  <Card>
    <Card.Title>{name}</Card.Title>
    <Card.Divider />
    <Text style={styles.description}>{description}</Text>
    <View style={styles.cardContent}>
      <TouchableOpacity onPress={() => makeCall(phoneNumber)}>
        <Icon name='phone' type='font-awesome' color='#517fa4' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Implement Chat functionality */ }}>
        <Icon name='comment' type='font-awesome' color='#517fa4' />
      </TouchableOpacity>
    </View>
  </Card>
);

const VeterinarianListScreen = () => {
  return (
    <FlatList
      data={veterinarians}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <VeterinarianCard
          name={item.name}
          phoneNumber={item.phoneNumber}
          description={item.description}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10 // Added some margin at the top for better spacing
  },
  description: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 10 // Added some margin at the bottom for better spacing
  }
});

export default VeterinarianListScreen;
