import { View, Text, SafeAreaView, ScrollView ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Utils, colors } from '../contants'

import ImagesPath from '../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const AuthOption = () => {
    const navigation = useNavigation()
  return (

    <SafeAreaView style={{backgroundColor:colors.black}}>

        <ScrollView style = {{backgroundColor: '#181818', height: '100%'}}>
            <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(8),}}>
                <Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
            </View>

            <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(2),}}>
                <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6'}}>Connect and share.{'\n'} Your world with us.</Text>
            </View>
            <View style={{marginTop:Utils.ScreenHeight(8)}}>
                <TouchableOpacity
                onPress={()=>{navigation.navigate("CreateAccount")}}
                style={{width:Utils.ScreenWidth(80),
                    borderRadius:18,
                    height:Utils.ScreenHeight(6),
                    backgroundColor:colors.primary,
                     alignSelf:"center", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingHorizontal:Utils.ScreenWidth(5)}}>

                        <Text style={{color:colors.black,fontWeight:500, fontSize:Utils.ScreenHeight(2), }}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>
                    <Text style={{color:colors.white, fontSize:Utils.ScreenHeight(2),textAlign:"center", marginVertical:Utils.ScreenHeight(3) }}>OR</Text>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("LoginOption")}}
                style={{width:Utils.ScreenWidth(80),
                backgroundColor:colors.white,

                    borderRadius:18,
                    height:Utils.ScreenHeight(6),  alignSelf:"center", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingHorizontal:Utils.ScreenWidth(5)}}>
                       
                        <Text style={{color:colors.black, fontSize:Utils.ScreenHeight(2), }}>LOGIN</Text>
                    </TouchableOpacity>

            </View>
            
        </ScrollView>
    </SafeAreaView>
  )
}



export default AuthOption