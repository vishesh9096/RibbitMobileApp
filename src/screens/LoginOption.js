import { View, Text, SafeAreaView, ScrollView ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Utils, colors } from '../contants'

import ImagesPath from '../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const LoginOption = () => {
    const navigation = useNavigation()
  return (

    <SafeAreaView style={{backgroundColor:colors.black}}>

        <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
            <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(8),}}>
                <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
            </View>

            <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(4),}}>
                <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6'}}>Login to your account</Text>
            </View>
            <View style={{marginTop:Utils.ScreenHeight(8)}}>
                <TouchableOpacity
                onPress={()=>{navigation.navigate("LoginPhone")}}
                style={{width:Utils.ScreenWidth(80),
                    borderRadius:18,
                    height:Utils.ScreenHeight(6), borderWidth:0.5, borderColor:colors.white, alignSelf:"center", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", paddingHorizontal:Utils.ScreenWidth(5)}}>
                        <Image source={ImagesPath.signUp.callIcon} style={{resizeMode:"contain", height:Utils.ScreenHeight(2), width:Utils.ScreenHeight(2)}}/>
                        <Text style={{color:colors.white, fontSize:Utils.ScreenHeight(2), marginLeft:Utils.ScreenWidth(12)}}>Continue With Phone</Text>
                    </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("LoginEmail")}}
                        
                style={{width:Utils.ScreenWidth(80),marginTop:Utils.ScreenHeight(3),
                    borderRadius:18,
                    height:Utils.ScreenHeight(6), borderWidth:0.5, borderColor:colors.white, alignSelf:"center", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", paddingHorizontal:Utils.ScreenWidth(5)}}>
                        <Image source={ImagesPath.signUp.EmailIcon} style={{
                            tintColor:colors.white,
                            resizeMode:"contain", height:Utils.ScreenHeight(2.5), width:Utils.ScreenHeight(2.5)}}/>
                        <Text style={{color:colors.white, fontSize:Utils.ScreenHeight(2), marginLeft:Utils.ScreenWidth(12)}}>Continue With Email</Text>
                    </TouchableOpacity>

            </View>
            <View style={{marginTop:Utils.ScreenHeight(35), flexDirection:"row", justifyContent:"center"}}>
                <Text  style={{color:colors.white, fontSize:Utils.ScreenHeight(2),}}>Dont Have A account?</Text>
                <Text style={{color:colors.primary, fontSize:Utils.ScreenHeight(2),textDecorationLine: 'underline',}}> Create</Text>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LoginOption