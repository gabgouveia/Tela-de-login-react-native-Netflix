import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/login-image.jpg')} style={styles.image} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Recuperar senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wihte',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 80,
    marginTop: 40,
  },
  inputContainer: {
    width: '80%',
    marginTop: 30,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'red',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'red',
    fontSize: 16,
  },
});

export default LoginScreen;

