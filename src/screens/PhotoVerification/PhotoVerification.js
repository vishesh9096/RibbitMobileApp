import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const PhotoVerification = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.black}}>
    <View style={{ backgroundColor:colors.black, height:Utils.ScreenHeight(100)}}>
        <View style={{justifyContent:"center", flexDirection:"row", marginTop:Utils.ScreenHeight(4)}}>
            <Text style={{fontSize:Utils.ScreenHeight(4.5), color:colors.primary, fontWeight:600}}>Ribbit</Text>
           
        </View>
        <View style={{justifyContent:"center", flexDirection:"row", marginTop:Utils.ScreenHeight(2)}}>
            <Text style={{fontSize:Utils.ScreenHeight(3), color:colors.white, }}>Verify Your Identity</Text>
           
        </View>
        <View style={{justifyContent:"center", flexDirection:"row", marginTop:Utils.ScreenHeight(2)}}>
            <Text style={{fontSize:Utils.ScreenHeight(2.5), color:colors.white,textAlign:"center", fontWeight:300 }}>Simply copy the gesture shown in {'\n'} the photo below. If your gesture {'\n'} matches, we'll verify your profile,{'\n'} and you can keep using Ribbit{'\n'} hassle-free!</Text>
           
        </View>
        <View style={{flexDirection:"row", justifyContent:"center", marginTop:Utils.ScreenHeight(5)}}>
            <Image source={ImagesPath.Ribbit.post} style={{height:Utils.ScreenHeight(32), width:Utils.ScreenWidth(70),borderColor:colors.white, resizeMode:"contain"}}/>
        </View>

        <TouchableOpacity style={{backgroundColor:colors.primary, height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(80), alignSelf:"center", marginTop:Utils.ScreenHeight(3), borderRadius:20, justifyContent:"center"}}>
            <Text style={{textAlign:"center", color:colors.black, fontSize:Utils.ScreenHeight(2.2), fontWeight:500}}>TAKE A PHOTO</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("TabNavigator")}}
        style={{backgroundColor:colors.black  , height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(80), alignSelf:"center", marginTop:Utils.ScreenHeight(3), borderRadius:20, justifyContent:"center"}}>
            <Text style={{textAlign:"center", color:colors.white, fontSize:Utils.ScreenHeight(2.2), fontWeight:500}}>SKIP</Text>
        </TouchableOpacity>
        
</View>
    </SafeAreaView>
  )
}

export default PhotoVerification