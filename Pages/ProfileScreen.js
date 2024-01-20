import React from 'react';
import { View,ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Background from '../Background';

const ProfileScreen = () => {
  return (
    <Background>
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.profileSection}>
                <Image
                source={require('../assets/IMG-20231117-WA0022.jpg')}  // Replace with actual image URI
                style={styles.profileImage}
                />
                <Text style={styles.profileName}>Garfield</Text>

                <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Breed</Text>
                <Text style={styles.infoContent}>Tabby</Text>
                </View>

                <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Date of Birth</Text>
                <Text style={styles.infoContent}>June 19, 1978</Text>
                </View>

                <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Age</Text>
                <Text style={styles.infoContent}>5 Years</Text>
                </View>

                <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Gender</Text>
                <Text style={styles.infoContent}>Male</Text>
                </View>

                <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Color</Text>
                <Text style={styles.infoContent}>Orange</Text>
                </View>

                <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Pet profile</Text>
                <FontAwesome name="pencil" size={16} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.footerSection}>
                <TouchableOpacity style={styles.footerButton}>
                <FontAwesome name="question-circle" size={24} color="black" />
                <Text style={styles.footerButtonText}>Help and Support</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton}>
                <FontAwesome name="info-circle" size={24} color="black" />
                <Text style={styles.footerButtonText}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton}>
                <FontAwesome name="star" size={24} color="black" />
                <Text style={styles.footerButtonText}>Rate Us</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Background color and other styling should match your background design
  },
  profileSection: {
    alignItems: 'center',
    // Additional styling if needed
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 40, // Adjust as per your background design
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  infoContainer: {
    backgroundColor: 'white', // Set the background to white
    borderRadius: 10, // Set a border radius for rounded corners
    padding: 15, // Set padding to ensure content is centered
    marginVertical: 8,
    width: '80%', // Set width to 80% of the screen width
    alignSelf: 'center', // Center the container
    // Apply shadow styling as needed
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 0 },
    elevation: 1,
  },
  infoTitle: {
    position: 'absolute',
    top: -10, // Adjust as necessary to position the label above the field
    left: 20, // Align with the text inside the container
    paddingHorizontal: 5, // Add padding to make the label stand out
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    // Any additional styling for the title
  },
  infoContent: {
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
    color: 'black',
    // Any additional styling for the content
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // Style your edit button
  },
  editButtonText: {
    marginRight: 8,
    // Style your edit button text
  },
  footerSection: {
    // Style your footer section if needed
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // Style your footer button
  },
  footerButtonText: {
    marginLeft: 8,
    // Style your footer button text
  },
  // Add other styles as needed
});

export default ProfileScreen;
