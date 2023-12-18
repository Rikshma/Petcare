import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Button
} from 'react-native';

const SignUpScreen = () => {
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Add state for other fields as necessary

  const handleSignUp = () => {
    // Sign up logic here
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.semiCircle} />
      <View style={styles.logoContainer}>
      <Image
        source={require('./assets/IMG-20231106-WA0001.jpg')} // Replace with your actual logo path
        style={styles.logo}
      />
      </View>
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Owner Name"
            onChangeText={setOwnerName}
            value={ownerName}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          {/* Social Media Buttons */}
          {/* Replace with your social media buttons */}
          <View style={styles.socialButtonsContainer}>
            <Button title="G" color="#000" />
            <Button title="f" color="#000" />
            <Button title="In" color="#000" />
            <Button title="Tw" color="#000" />
          </View>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>
          <TextInput 
            style={styles.textInput} 
            placeholder="Enter Your Pet Name"
            // Add onChangeText and value for pet name
          />
          {/* Pet Type Selection */}
          {/* Replace with your pet type selection logic */}
          <View style={styles.petTypeContainer}>
            <TouchableOpacity style={styles.petTypeButton}>
              <Text>Dog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.petTypeButton}>
              <Text>Cat</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
            style={styles.textInput} 
            placeholder="Select Your Pet Breed"
            // Add onChangeText and value for pet breed
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Date of Birth"
            // Add onChangeText and value for date of birth
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Age"
            // Add onChangeText and value for age
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Select Your Pet Gender"
            // Add onChangeText and value for pet gender
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Color"
            // Add onChangeText and value for color
          />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500', // Orange background color
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white', // Change to white to match the rest of the screen
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
  logoContainer: {
    marginTop: 60, // Adjust based on your layout
    alignItems: 'center',
    height: 100, // Adjust based on your logo
  },
  logo: {
    height: '100%',
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 120, // Adjust based on your layout
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    height: 100, // Set this to the height of your logo
    resizeMode: 'cover',
    marginTop: 0,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeBackground: {
    backgroundColor: '#FFA500', // Orange background color
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 60, // Adjust as needed
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  uploadButtonText: {
    color: '#000000',
  },
  petTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  petTypeButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  textInput: {
    width: '90%',
    backgroundColor: '#FFFFFF', // Keep the background white
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Slight border to help inputs stand out
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.1, // Shadow for iOS
    shadowRadius: 4, // Shadow for iOS
  },

  // Add additional styles as needed
});

export default SignUpScreen;
