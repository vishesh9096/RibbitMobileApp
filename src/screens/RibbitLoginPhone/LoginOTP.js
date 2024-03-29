




import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView, Keyboard, SafeAreaView, Alert } from 'react-native';
import styles from "./styles";
import Helper from "../../Lib/Helper";
import ApiUrl from "../../Lib/ApiUrl";
import { colors } from "../../contants";
import Utils from "../../contants/Utils";
import ImagesPath from "../../assests/ImagesPath";

import OTPTextView from "react-native-otp-textinput";

import { strings } from "../LanguageScreen/StringsOfLanguages";



const STATIC_TIME = 60 * 2; // 2 minutes

function LoginOTP(props) {
    const { navigation, route } = props;

    const [getResData, setGetResData] = useState(route?.params?.resData);
    //console.log('resData',getResData);
    const[number,setNumber] = useState(route?.params?.phno)
    const [providerType, setProviderType] = useState(route?.params?.providerKey);
    const [otp, setOtp] = useState('')
    const [num, setNum] = useState()
    const [action, setAction] = useState(route?.params?.action);
    const [seconds, setSeconds] = useState(STATIC_TIME);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [FCMtoken, setFCMToken] = useState('');

    useEffect(() => {
       // checkToken();
    }, [])

    

    useEffect(() => {
        let interval = null;
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    var tempMinutes = Math.floor(seconds / 60);
    var tempSeconds = seconds - tempMinutes * 60;
    let countDown = `${tempMinutes < 10 ? `0${tempMinutes}` : tempMinutes}:${tempSeconds < 10 ? `0${tempSeconds}` : tempSeconds}`;


    // useEffect(() => {
    //     setTimeout(() => {
    //         let str = getResData?.phone.toString();
    //         str = str.slice(0, -7);
    //         setNum(str);
    //         // console.log('------------str:: ', str);
    //     }, 500);

    // }, [])

    // const sendOtpAgain = () => {

    //     // navigation.navigate('OtpScreen')
    //     let formdata = new FormData();
    //     formdata.append('phone', getResData.phone);
    //     formdata.append('country_code', '91');
    //     formdata.append('action', action);

    //     showLoader(true)
    //     setOtp('')
    //     console.log('-----------formdata:: ', formdata);
    //     Helper.makeRequest({ url: ApiUrl.sendOtp, data: formdata, method: "FORMDATA" }).then((data) => {
    //         hideLoader(false)
    //         console.log('-----------res:: ', data);
    //         if (data.status === "success") {
               
    //             Helper.showToast(data.message);
    //            navigation.navigate("TabNavigator")
    //         } else {
    //             Helper.showToast(data.message)
               
    //           //  Helper.showToast(data.message)
    //             hideLoader(false)
    //         }
    //         // Helper.showToast(data.message)
    //     }).catch(err => {
    //         console.log("----err::: ", err)
    //         // Helper.showToast(err.message)
    //         hideLoader(false)
    //     })
    // }


    const otpInApi = () => {
        if (!otp) {
            Helper.showToast('Please Enter your OTP')
            return;
        }

        // if (getResData?.opt != otp) {
        //     Helper.showToast('Your OTP mismatch!');
        //     return;
        // }

        // const body ={
        //     mobile_no : number,
        //     otp:otp,
        //     "action":"login"
        // }
        // showLoader(true)
        // console.log('-----------formdata:: ', body);
        // Helper.makeRequest({ url: ApiUrl.verifyotp, data: body, method: "POST" }).then((data) => {
        //     hideLoader(false)
        //     if (data.status === "success") {
        //         Helper.setData('token', data.authToken.access);
        //         console.log("token is " ,Helper.getData("token"));
        //         Helper.setData('userdata', data);
        //         navigation.navigate("TabNavigator")
        //     //    { if (data.data.step === 1) {
        //     //         navigation.reset({
        //     //             routes: [{ name: "OnboardingScreen1", params: { getResData: getResData }}],
        //     //             //routes: [{ name: "TabNavigator" }],
        //     //             //routes: [{ name: "TermsAndConditions" }],
        //     //             //routes: [{ name: "OnboardingScreen1" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 2) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen2" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 3) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen3" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 4) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen4" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 5) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen5" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 6) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen6" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 7) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen7" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 8) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen8" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 9) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             // routes: [{ name: "OnboardingScreen9" }],
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     } else if (data.data.step === 10) {
        //     //         navigation.reset({
        //     //             index: 0,
        //     //             routes: [{ name: "TabNavigator" }],
        //     //         });
        //     //         return;
        //     //     }}
        //     } else {
        //      //   Helper.showToast(data.message)
        //     Helper.showToast(data.message)
              
            
        //         hideLoader(false)
        //     }

        //   //  Helper.showToast(data.message)
        // }).catch(err => {
        //     console.log("----err::: ", err.message)
        //     // Helper.showToast(err.message)
        //     hideLoader(false)
        // })
    }

    const handleInput = (text) => {
        setOtp(text.replace(/[^0-9]/g, ''))
        if (text.length === 4) {
            Keyboard.dismiss();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={colors.black} barStyle="dark-content" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

<View style = {{alignItems: 'center', marginTop:Utils.ScreenHeight(6)}}>
<Text style = {{ fontSize: 50, fontWeight: '900', color: '#fbe34d'}}>Ribbit</Text>
         </View>

       <View style = {{alignItems: 'center', marginTop: Utils.ScreenHeight(4), justifyContent: 'center'}}>
         <Text style = {{ fontSize: 20, fontWeight: '500', color: '#f6f6f6', textAlign: 'center'}}>Enter OTP shared {'\n'} on your phone</Text>
        </View>
              
                <View style={styles.boxCss}>
                  
                    <View style={{ marginTop: Utils.ScreenWidth(12) }}>
                        <OTPTextView
                            tintColor={colors.primary}
                            offTintColor={colors.primary}
                            textInputStyle={styles._viewOffInput}
                            handleTextChange={(text) => {
                                handleInput(text)
                            }} />

                        {/* <OTPTextView
                        ref={e => (navigation.input1 = e)}
                        // defaultValue={otp}
                        handleTextChange={(text) => {
                            setOtp(text.replace(/[^0-9]/g, ''))
                        }}
                        inputCount={4}
                        textInputStyle={styles._viewOffInput}
                        keyboardType="numeric"
                        codeInputFieldStyle={{ backgroundColor: colors.white }}
                        tintColor={colors.white}
                        offTintColor={colors.white}
                    /> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={[styles.Resend, { marginHorizontal: 2 }]}>{'Did not recieved OTP ?'}</Text>
                        <Text onPress={()=>navigation.navigate("TabNavigator")} style={[styles.Resend, { color: colors.primary , marginLeft:Utils.ScreenWidth(12)}]}>Resend OTP</Text>
                    </View>
                    <View style={{ marginTop: Utils.ScreenWidth(7), }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => 
                                
                                navigation.navigate("TabNavigator")
                            }
                            style={{ flexDirection: 'row', justifyContent: 'center', width: Utils.ScreenWidth(90), backgroundColor: colors.primary, height: Utils.ScreenHeight(7), borderRadius: 13 }}>
                            <View style={[styles.titleViewCss, { width: Utils.ScreenWidth(45) }]}>
                               
                                <Text style={styles.titleCss}>CONTINUE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* <Toast/> */}
            {/* <CustomLoader loaderVisible={loaderVisible} /> */}
        </SafeAreaView>
    )
}

export default LoginOTP;