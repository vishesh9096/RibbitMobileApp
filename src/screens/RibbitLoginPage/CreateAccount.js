import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Utils, colors } from '../../contants';

const CreateAccount = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');

    useLayoutEffect(() => 
    navigation.setOptions({
        headerShown: false,
    }))

  return (
    <SafeAreaView style={{backgroundColor:colors.black}}>
        <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
         <View style = {{alignItems: 'center', marginTop: 60,}}>
            <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
         </View>

    <View style = {{alignItems: 'center', marginTop: 35,}}>
      <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6'}}>Create account</Text>
    </View>

<View style = {{marginTop: 50, alignItems: 'center'}}>
  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
      placeholderTextColor={colors.white}
      style = {{fontSize: 14, color: '#747474',paddingLeft:Utils.ScreenWidth(4), marginHorizontal: 12, maxWidth: '80%',  }}
      placeholder = "Enter Full Name"
      value = {name}

      onChangeText= {(text)=>{setName(text)}}/>
  </View>


  <View style={{ marginTop: 30 }} />

  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
      style = {{fontSize: 14, color: '#747474',paddingLeft:Utils.ScreenWidth(4), marginHorizontal: 12, maxWidth: '80%' }}
      placeholder = "Username"
      placeholderTextColor={colors.white}
      value = {username}
      onChangeText= {(text)=>{setUsername(text)}}/>
  </View>

  <View style={{ marginTop: 30 }} />

  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
      placeholderTextColor={colors.white}
      style = {{fontSize: 14,paddingLeft:Utils.ScreenWidth(4), color: '#747474', marginHorizontal: 12, maxWidth: '80%' }}
      placeholder = "Date of Birth in DDMMYYYY"
      value = {dob}
      onChangeText= {(text)=>{setDob(text)}}/>
  </View>

  <View style={{ marginTop: 30 }} />

  <View style = {{  borderColor: '#747474',  borderWidth: 1, borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', magrinTop: 30 }}>
      <TextInput
      placeholderTextColor={colors.white}
      style = {{fontSize: 14, color: '#747474',paddingLeft:Utils.ScreenWidth(4), marginHorizontal: 12, maxWidth: '80%' }}
      placeholder = "Create Password"
      secureTextEntry = {true}
      value = {password}
      onChangeText= {(text)=>{setPassword(text)}}/>

  </View>
</View>

<TouchableOpacity style = {{alignItems: 'center', marginTop: 30}}
onPress = {() => navigation.navigate('FbFriends')}>
    <View style = {{ backgroundColor: '#fbe34d' , borderRadius: 25, height: 45, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', magrinTop: 30 }}>
      <Text style = {{color: '#181818'}}>Continue</Text>
    </View>
  </TouchableOpacity>

  <View style = {{marginTop: 40, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
    <Text style = {{fontSize: 14, color: '#747474' }}>
      Don't have an account?
    </Text>
    <TouchableOpacity onPress = {() => navigation.navigate('AddProfile')}>
    <Text style={{ fontSize: 14, color: '#747474', textDecorationLine: 'underline', marginTop: 5, color: '#fbe34d' }}>
    Create
  </Text>
  </TouchableOpacity>
    </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateAccount