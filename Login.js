import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

// Get the device's screen width
const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic
    console.log('Login pressed', email, password);
  };

  const handleSignup = () => {
    // Navigate to your signup screen or logic
    console.log('Signup pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#8a8a8a"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#8a8a8a"
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ecdc4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
    color: 'white',
  },
  input: {
    width: width * 0.8, // 80% of screen width
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 25, // Increased border radius
    marginBottom: 15,
    fontSize: 16, // Adjust font size
  },
  forgotPassword: {
    color: 'white',
    marginBottom: 24,
    fontSize: 16, // Adjust font size
  },
  loginButton: {
    width: width * 0.8, // 80% of screen width
    backgroundColor: '#ff6b6b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, // Matched border radius
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text inside the button
    fontSize: 18, // Increase font size for better visibility
  },
  signupText: {
    color: 'white',
    fontSize: 16, // Adjust font size
  },
});

export default LoginScreen;
