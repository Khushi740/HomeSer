import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React , { useState } from 'react';
import axios from 'axios';

export default function Register({ navigation }) {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit =()=>{
    const userData = {
      name:name,
      email:email,
      phone:phone,
      address:address,
      password:password
    };

    axios.post('http://192.168.24.112:5001/register',userData)
    .then((res)=> {
      if(res.data.status=='ok'){
      navigation.navigate('Login'); 
    }
  else if (res.data.data =='user already exists!'){
    Alert.alert("user exists");
  }
  console.log(res.data);
})
    .catch(e => console.log(e));
    



  };
 
  const onPressLogin = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <TextInput placeholder="Name" value={name}
        onChangeText={text => setName(text)} style={styles.box} />
      <TextInput placeholder="Email" value={email} 
      onChangeText={text => setEmail(text)} style={styles.box} />
      <TextInput placeholder="Phone" value={phone} 
      onChangeText={text => setPhone(text)}keyboardType="numeric" style={styles.box} />
      <TextInput placeholder="Address" value={address} 
      onChangeText={text=> setAddress(text)}style={styles.box} />
      <TextInput placeholder="Password" value={password} 
      onChangeText={text => setPassword(text)} secureTextEntry={true} style={styles.box} />

      {/* Create Account Button */}
      <TouchableOpacity style={[styles.button, { marginTop: 15 }]} onPress={()=>handleSubmit()}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Have Account? Sign In Button */}
      <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={onPressLogin}>
        <Text style={styles.buttonText}>Have Account? Sign In</Text>
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
