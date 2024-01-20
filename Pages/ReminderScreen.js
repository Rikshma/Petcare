import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FontAwesome } from '@expo/vector-icons';
import Background from '../Background';

const ReminderScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleAddReminder = () => {
    // Validate input
    if (!name.trim() || !description.trim()) {
      alert('Please fill in both name and description for the reminder.');
      return;
    }

    // TODO: Replace with actual API call to send data to the backend
    console.log('Reminder data:', { selectedDate, name, description });

    // Clear input fields after submission
    setName('');
    setDescription('');
  };

  return (
    <Background>
        <View>
        <Text style={styles.title}>Remainder</Text>
        <Calendar
            style={styles.calendar}
            current={Date()}
            minDate={'2012-05-10'}
            onDayPress={handleDayPress}
            markedDates={{ [selectedDate]: { selected: true } }}
        />
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Reminder Name"
            value={name}
            onChangeText={setName}
            />
            <TextInput
            style={[styles.input, styles.inputDescription]}
            placeholder="Reminder Description"
            value={description}
            onChangeText={setDescription}
            multiline
            />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddReminder}>
            <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
        </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  calendar: {
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 5,
    // Optional: Add a background color and padding to ensure the shadow is visible
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10, // Optional: if you want rounded corners
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
    fontSize: 16,
  },
  inputDescription: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'center', // Center the button horizontally
    bottom: -60, 
    backgroundColor: '#FFA500', // Orange color for the button
    borderColor: 'white', // White border
    borderWidth: 4, // Border width of 2
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
});

export default ReminderScreen;
