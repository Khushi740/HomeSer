import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    const userData = {
      email: email,
      password: password,
    };

    // Send request to the /login endpoint
    axios.post('http://192.168.24.112:5001/login', userData)
      .then(res => {
        if (res.data.status =='ok') {
          navigation.navigate("Home");  
        } else {
          console.log("Login failed:", res.data);  
        }
      })
      .catch(error => {
        console.log('Error during login:', error);  
      });
  };

  const onPressLogin = () => {
    navigation.navigate('Register'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
     
      <TextInput 
        placeholder='Email' 
        value={email} 
        onChangeText={text => setEmail(text)} 
        style={styles.box} 
      />
      <TextInput 
        placeholder='Password' 
        value={password} 
        onChangeText={text => setPassword(text)} 
        secureTextEntry={true} 
        style={styles.box} 
      />
      <TouchableOpacity style={[styles.button, { marginTop: 15 }]} onPress={onPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={onPressLogin}>
        <Text style={styles.buttonText}>Don't Have an Account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 4,
    marginBottom: 10,
    width: 320,
  },
  button: {
    width: 320,
    borderWidth: 1,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#ABCDEE',
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 6,
  },
});
