import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import ImagesPath from '../assests/ImagesPath';
import { Utils, colors } from '../contants';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: 'Live Streaming',
    text: 'Streaming Life, One Moment at a \n Time',
    image: ImagesPath.Ribbit.Intro1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Share Stories',
    text: 'Sharing Moments, Creating \n  Memories.',
    image: ImagesPath.Ribbit.Intro2,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Connect with Friends ',
    text: 'Bringing Friends Together, One Click \n at a Time.',
    image: ImagesPath.Ribbit.Intro3,
    backgroundColor: '#22bcb5',
  }
];

const Intro = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor:colors.black, flex:1}}>
        <Image source={item.image} style={{resizeMode:"contain", height:"70%",  width:"100%"}}/>
        <Text style={styles.headtext}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const navigation = useNavigation();
  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // setShowRealApp(true);
    navigation.navigate("AuthOption")

  }

  if (showRealApp) {
    // You can return your actual app component here
  
    
  }
  _renderNextButton = () => {
    return (
      <View style={{marginTop:Utils.ScreenHeight(1.5)}}>
        <Text style={{color:colors.primary, fontSize:Utils.ScreenHeight(2.5), textAlign:"center"}}>Next</Text>
        
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
        <View style={{marginTop:Utils.ScreenHeight(1.5)}}>
        <Text style={{color:colors.primary, fontSize:Utils.ScreenHeight(2.5), textAlign:"center"}}>Done</Text>
        
      </View>
    );
  };
return <AppIntroSlider
renderDoneButton={_renderDoneButton}
renderNextButton={_renderNextButton}

renderItem={renderItem} data={slides} onDone={onDone} />;
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headtext: {
    fontSize: Utils.ScreenHeight(3),
    textAlign: 'center',
    fontWeight:"500",
    color:colors.primary,

  },
  text: {
    
    fontSize: Utils.ScreenHeight(2.5),
    textAlign: 'center',
    color:colors.white,
    marginTop:Utils.ScreenHeight(5)

  },
});

export default Intro;
