import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
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
import Background from '../Background';

const socialButtons = [
  { name: 'google', color: 'orange' },
  { name: 'facebook', color: 'orange' },
  { name: 'instagram', color: 'orange' },
  { name: 'twitter', color: 'orange' },
];
const SignUpScreen = () => {
  const [image, setImage] = useState(null);
  const [selectedPetType, setSelectedPetType] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      setImage(result.uri);
      // Assuming you want to also include the image in the formData:
      setFormData({ ...formData, image: result.uri });
    }
  };

  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    password: '',
    petName: '',
    breed: 0,
    dateOfBirth: '',
    age: 0,
    gender: 0,
    color: ''
  });

  const handleInputChange = (name, value) => {
    let updatedValue = value;
  if (name === 'age' || name === 'gender' || name === 'breed') {
    updatedValue = parseInt(value, 10); // Convert value to integer
  }

  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: updatedValue
  }));
  };

  const handleSignUp = async () => {
    // URL of your backend endpoint
    const signUpEndpoint = 'https://localhost:7036/Pet';
  
    try {
      console.log("logging")
      // Make a POST request to your backend server
      const response = await fetch(signUpEndpoint, {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
        
        
      });
     console.log(response)
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the JSON response from the server
      const responseData = await response.json();
  
      // Handle the response
      // For example, navigate to another screen, show success message, etc.
      console.log('Sign up successful:', responseData);
    } catch (error) {
      // Handle errors (e.g., network error, response parsing error)
      console.error('Error during sign up:', error.message);
    }
  };
  

  return (
    <Background>
      <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logo.png')} // Replace with your actual logo path
        style={styles.logo}
      />
      </View>
    <ScrollView  >
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Owner Name"
            onChangeText={(value) => handleInputChange('ownerName', value)}
            value={formData.ownerName}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(value) => handleInputChange('email', value)}
            value={formData.email}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Password"
            secureTextEntry
            onChangeText={(value) => handleInputChange('password', value)}
            value={formData.password}
          />
          {/* Social Media Buttons */}
          {/* Replace with your social media buttons */}
          <View style={styles.socialButtonsContainer}>
            {socialButtons.map((button, index) => (
              <TouchableOpacity key={index} style={[styles.socialButton, { backgroundColor: button.color }]}>
                <FontAwesome name={button.name} size={34} color="#FFF" />
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            {image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
            {!image && <FontAwesome name='camera' size={34} color="black" />}
          </TouchableOpacity>
          <TextInput 
            style={styles.textInput} 
            placeholder="Enter Your Pet Name"
            onChangeText={(value) => handleInputChange('petName', value)}
            value={formData.petName}
          />
          {/* Pet Type Selection */}
          {/* Replace with your pet type selection logic */}
          <View style={styles.petTypeContainer}>
            <TouchableOpacity
              style={[
                styles.petTypeButton,
                selectedPetType === 'Dog' ? styles.petTypeButtonSelected : {},
              ]}
              onPress={() => setSelectedPetType('Dog')}
            >
              <FontAwesome name='paw' size={24} color={selectedPetType === 'Dog' ? 'black' : 'grey'} />
              <Text>Dog</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.petTypeButton,
                selectedPetType === 'Cat' ? styles.petTypeButtonSelected : {},
              ]}
              onPress={() => setSelectedPetType('Cat')}
            >
              <FontAwesome name='paw' size={24} color={selectedPetType === 'Cat' ? 'black' : 'grey'} />
              <Text>Cat</Text>
            </TouchableOpacity>
          </View>

          <TextInput 
            style={styles.textInput} 
            placeholder="Select Your Pet Breed"
            onChangeText={(value) => handleInputChange('breed', value)}
            value={formData.breed}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Date of Birth"
            onChangeText={(value) => handleInputChange('dateOfBirth', value)}
            value={formData.dateOfBirth}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Age"
            onChangeText={(value) => handleInputChange('age', value)}
            value={formData.age}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Select Your Pet Gender"
            onChangeText={(value) => handleInputChange('gender', value)}
            value={formData.gender}
          />
          <TextInput 
            style={styles.textInput} 
            placeholder="Color"
            onChangeText={(value) => handleInputChange('color', value)}
            value={formData.color}
          />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </Background>
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
  logoContainer: {
    marginTop: 20, // Adjust based on your layout
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
    borderRadius: 25,
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: '#FFFFFF', // White background for the upload button
    padding: 10,
    borderRadius: 100, // Make it circular
    width: 150, // Set width for the button
    height: 150, // Set height for the button
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 0,
    borderColor: '#ddd', // Slight border to help the button stand out
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.1, // Shadow for iOS
    shadowRadius: 4, // Shadow for iOS
    alignSelf: 'center', // Center the button in the container
  },
  uploadedImage: {
    width: '100%', // Full width of the button
    height: '100%', // Full height of the button
    borderRadius: 100, // Make it circular
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
    width: 80, // Adjust the size as needed
    height: 80, // Adjust the size as needed
    borderRadius: 50, // Half the size to make it circular
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginBottom:10
  },
  petTypeButtonSelected: {
    borderWidth: 2,
    borderColor: 'black',
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
