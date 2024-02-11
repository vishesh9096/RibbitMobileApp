import React, { useState, useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity , Text, View} from 'react-native';
import { Utils, colors } from '../contants';
import ImagesPath from '../assests/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import Splash from '../screens/Splash';
import HomeScreen from '../screens/TabNavigatorScreens/HomeScreen';
import Reels from '../screens/TabNavigatorScreens/Reels';
import RibbitSearch from '../screens/RibbitSearch/RibbitSearch';
import AddProfile from '../screens/RibbitProfile/AddProfile';
import Chat from '../screens/Chat/Chat';





const Tab = createBottomTabNavigator();
function TabNavigator() {

  
    const RenderTabIcon = (props) => {
        const { activeIcon, inActiveIcon, title, isFocused } = props;
        return (
            <View style={isFocused ? tabStyles.imgViewOfTabs : tabStyles.viewOfTabs}>
                <Image
                    source={activeIcon}
                    style={[tabStyles.tabIconCss, { tintColor: isFocused ? colors.white : colors.grey,
                    
                    }]} />

            </View>
        );
    }


    // const RenderTabIconcenter = (props) => {
    //     const { activeIcon, inActiveIcon, title, isFocused } = props;
    //     return (
    //         <View style={{position:"absolute",backgroundColor:colors.primary, bottom:Utils.ScreenHeight(0.2), borderRadius:50, shadowColor:colors.blackdark,shadowOpacity:0.5,shadowOffset:5} }>
    //             <Image
    //                 source={activeIcon}
    //                 style={{ tintColor:colors.white,width:Utils.ScreenHeight(5), height:Utils.ScreenHeight(5),margin:Utils.ScreenHeight(1), resizeMode:"contain" }} />
    //             {/* <Text style={[{ fontSize: 12, marginTop: Utils.ScreenHeight(0.6) }, { color: isFocused ? colors.primary : colors.grey, }]}>{title}</Text> */}
    //         </View>
    //     );
    // }
    const tabStyles = StyleSheet.create({
        viewOfTabs: {
            justifyContent: "center", alignItems: "center", marginTop: Utils.ScreenWidth(3)
        },
        imgViewOfTabs: {
            width: 62, height: 33, borderRadius: 15,
            justifyContent: "center", alignItems: "center", marginTop: Utils.ScreenWidth(3)
        },
        tabIconCss: {
            width: 23, height: 23, resizeMode: "contain", 
        },
    });
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitle: "",
                tabBarStyle:{height:Utils.ScreenHeight(8), paddingTop:Utils.ScreenHeight(3),
                backgroundColor:'rgba(0, 0, 0, 0.8)', 
                }
                
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{  
                    headerTitle: "",

               
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title=""
                                isFocused={focused}
                                activeIcon={ImagesPath.home.home_icon}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Reels"
                component={Reels}
                options={{  
                    headerTitle: "",

               
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title=""
                                isFocused={focused}
                                activeIcon={ImagesPath.Ribbit.tab2}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />

<Tab.Screen
                name="fsda"
                component={RibbitSearch}
                options={{  
                    headerTitle: "",

               
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title=""
                                isFocused={focused}
                                activeIcon={ImagesPath.Ribbit.tab3}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />

<Tab.Screen
                name="fsd"
                component={Chat}
                options={{  
                    headerTitle: "",

               
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title=""
                                isFocused={focused}
                                activeIcon={ImagesPath.Ribbit.tab4}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="HomeScrfeen"
                component={AddProfile}
                options={{  
                    headerTitle: "",

               
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title=""
                                isFocused={focused}
                                activeIcon={ImagesPath.Ribbit.tab5}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />

           
            
            

        </Tab.Navigator>
    );


}

export default TabNavigator;
// // import { View, Text } from 'react-native'
// // import React from 'react'

// // const TabNavigator = () => {
// //   return (
// //     <View>
// //       <Text>TabNavigator</Text>
// //     </View>
// //   )
// // }

// // export default TabNavigator
// import { View, Text } from 'react-native'
// import React from 'react'

// const TabNavigator = () => {
//   return (
//     <View>
//       <Text>TabNavigator</Text>
//     </View>
//   )
// }

// export default TabNavigator