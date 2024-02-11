import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Intro from '../screens/Intro';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/TabNavigatorScreens/HomeScreen';
import PhotoVerification from '../screens/PhotoVerification/PhotoVerification';
import LoginEmail from '../screens/RibbitLoginPage/LoginEmail';
import CreateAccount from '../screens/RibbitLoginPage/CreateAccount';
import FbFriends from '../screens/RibbitDiscover/FbFriends';
import DiscoverPeople from '../screens/RibbitDiscover/DiscoverPeople';
import AddProfile from '../screens/RibbitProfile/AddProfile';
import LoginPhone from '../screens/RibbitLoginPhone/LoginPhone';
import LoginOTP from '../screens/RibbitLoginPhone/LoginOTP';
import RibbitSearch from '../screens/RibbitSearch/RibbitSearch';
import ForYou from '../screens/RibbitSearch/ForYou';
import Accounts from '../screens/RibbitSearch/Accounts';
import Reels from '../screens/TabNavigatorScreens/Reels';
import LoginOption from '../screens/LoginOption';
import AuthOption from '../screens/AuthOption';
import Audio from '../screens/Audio/Audio';
import Tags from '../screens/Tags/Tags';
import Location from '../screens/Location/Location';
import Chat from '../screens/Chat/Chat';







const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="PhotoVerification"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                 <Stack.Screen name="Intro" component={Intro} />
                 <Stack.Screen name="PhotoVerification" component={PhotoVerification} />
                 <Stack.Screen name="TabNavigator" component={TabNavigator} />
                 {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                 <Stack.Screen name = "LoginEmail" component = {LoginEmail}/>
                <Stack.Screen name = "CreateAccount" component = {CreateAccount}/>
                <Stack.Screen name = "FbFriends" component = {FbFriends}/>
                <Stack.Screen name = "DiscoverPeople" component = {DiscoverPeople}/>
                <Stack.Screen name = "AddProfile" component = {AddProfile}/>
                <Stack.Screen name = "LoginPhone" component = {LoginPhone}/>
                <Stack.Screen name = "LoginOTP" component = {LoginOTP}/>
                <Stack.Screen name = "RibbitSearch" component = {RibbitSearch}/>
                <Stack.Screen name = "ForYou" component = {ForYou}/>
                <Stack.Screen name = "Accounts" component = {Accounts}/>
                <Stack.Screen name = "Reels" component = {Reels}/>
                <Stack.Screen name = "LoginOption" component = {LoginOption}/>
                <Stack.Screen name = "AuthOption" component = {AuthOption}/>
                <Stack.Screen name = "Audio" component = {Audio}/>
                <Stack.Screen name = "Tags" component = {Tags}/>
                <Stack.Screen name = "Location" component = {Location}/>
                <Stack.Screen name = "Chat" component = {Chat}/>
                 





                
                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;