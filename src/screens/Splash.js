import { View, Text, StatusBar, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'


import Styles from './Styles'
import { useNavigation } from '@react-navigation/native'
import ImagesPath from '../assests/ImagesPath'
import { Utils, colors } from '../contants'


const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Intro")
    }, 3000);
  },[])
  return (

    <View style={{height:"100%", alignItems:"center", justifyContent:"center", backgroundColor:colors.white}}>
      <Image source={ImagesPath.Ribbit.Splash} style={{
        resizeMode:"strech",
        height:Utils.ScreenHeight(100),
        width:"100%",
        justifyContent:"center",
        }}/>
    </View>

  )
}

export default Splash