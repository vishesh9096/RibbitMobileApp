import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:colors.black}}>
   <ScrollView style={{paddingHorizontal:Utils.ScreenWidth(5),height:"100%",
   backgroundColor:colors.black,
   paddingTop:Utils.ScreenHeight(2)}}>
    <View>
        {/* STORIESS */}
        <Text style={{fontSize:Utils.ScreenHeight(2), color:colors.white}}>Stories</Text>
        <ScrollView 
        style={{marginTop:Utils.ScreenHeight(1)}}
        horizontal>

            <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),justifyContent:"center",marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8), borderRadius:100, borderWidth:1, borderStyle:"dashed", borderColor:colors.primary}}>
                <Text style={{fontSize:Utils.ScreenHeight(3), alignSelf:"center", color:colors.primary}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize:Utils.ScreenHeight(1.6), alignSelf:"flex-start",paddingLeft:Utils.ScreenWidth(1), color:colors.white, marginTop:Utils.ScreenHeight(1)}}>Add Story</Text>
            </View>

            <View style={{justifyContent:"center", alignItems:"center", flex:1, marginHorizontal:Utils.ScreenWidth(2),}}>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),justifyContent:"center",
             width:Utils.ScreenHeight(8)}}>
            <Image 
                style={{height:Utils.ScreenHeight(8),
                     width:Utils.ScreenHeight(8),
                     borderRadius:100, borderWidth:1,  borderColor:'rgba(250, 227, 77, 1)'}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            <Text style={{fontSize:Utils.ScreenHeight(1.6), alignSelf:"flex-start", color:colors.white, marginTop:Utils.ScreenHeight(1)}}>Sam Silly</Text>
            </View>
            <View style={{justifyContent:"center", alignItems:"center", flex:1, marginHorizontal:Utils.ScreenWidth(2),}}>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),justifyContent:"center",
             width:Utils.ScreenHeight(8)}}>
            <Image 
                style={{height:Utils.ScreenHeight(8),
                     width:Utils.ScreenHeight(8),
}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            <Text style={{fontSize:Utils.ScreenHeight(1.6), alignSelf:"flex-start", color:colors.white, marginTop:Utils.ScreenHeight(1)}}>Sam Silly</Text>
            </View>

            <View style={{justifyContent:"center", alignItems:"center", flex:1, marginHorizontal:Utils.ScreenWidth(2),}}>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),justifyContent:"center",
             width:Utils.ScreenHeight(8)}}>
            <Image 
                style={{height:Utils.ScreenHeight(8),
                     width:Utils.ScreenHeight(8),
}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            <Text style={{fontSize:Utils.ScreenHeight(1.6), alignSelf:"flex-start", color:colors.white, marginTop:Utils.ScreenHeight(1)}}>Sam Silly</Text>
            </View>

            <View style={{justifyContent:"center", alignItems:"center", flex:1, marginHorizontal:Utils.ScreenWidth(2),}}>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),justifyContent:"center",
             width:Utils.ScreenHeight(8)}}>
            <Image 
                style={{height:Utils.ScreenHeight(8),
                     width:Utils.ScreenHeight(8),
}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            <Text style={{fontSize:Utils.ScreenHeight(1.6), alignSelf:"flex-start", color:colors.white, marginTop:Utils.ScreenHeight(1)}}>Sam Silly</Text>
            </View>
           
            
           
            
            
            
        </ScrollView>
         {/* STORIESS */}

         {/* POSTS */}
        <View style={{marginTop:Utils.ScreenHeight(4),  borderColor:colors.grey2}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>

            <View style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(5)}}
                source={ImagesPath.home.manImg}/>
            </View>
                <View style={{marginLeft:Utils.ScreenWidth(2)}}>
                    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.white}}>Vishesh Gatha</Text>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey2}} >Mumbai</Text>

                </View>
            </View>
                <View style={{height:Utils.ScreenHeight(40), 
                    marginTop:Utils.ScreenHeight(2),
                    width:Utils.ScreenHeight(40) }}>
                <Image 
                style={{height:Utils.ScreenHeight(40)
                   
                    , resizeMode:"cover", borderRadius:20
                    , width:Utils.ScreenHeight(40)}}
                source={{uri:"https://img.freepik.com/free-photo/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg"}} />
            </View>
            <View style={{marginTop:Utils.ScreenHeight(2), marginHorizontal:Utils.ScreenWidth(2), flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3.5), width:Utils.ScreenWidth(9),}} source={ImagesPath.Ribbit.like}/>
                    </TouchableOpacity>
                    <Text style={{color:colors.white, fontSize:Utils.ScreenHeight(2),marginLeft:Utils.ScreenWidth(2)}}>2.3k</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3), width:Utils.ScreenHeight(3),}} source={ImagesPath.Ribbit.share}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3), width:Utils.ScreenHeight(3),marginLeft:Utils.ScreenWidth(3)}} source={ImagesPath.Ribbit.save}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginVertical:Utils.ScreenHeight(1), 
                flexDirection:"row", justifyContent:"flex-start", alignItems:"center",
                marginHorizontal:Utils.ScreenWidth(2)}}>
                <Text style={{fontSize:Utils.ScreenHeight(1.9),
                    fontWeight:500,
                    color:colors.white}}>Vishesh Gatha</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.7),
                   marginLeft:Utils.ScreenWidth(2),
                    color:colors.white}}>Living my best life here...</Text>
            </View>
            <TextInput
            placeholder='Write a comment'
            placeholderTextColor={colors.grey}
            textAlign='left'
            
            style={{borderWidth:1, borderColor:colors.inputBorder,
                borderRadius:12,
                height:Utils.ScreenHeight(4), paddingLeft:Utils.ScreenWidth(3)}}
            />
          

        </View>


        <View style={{marginTop:Utils.ScreenHeight(4),  borderColor:colors.grey2}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>

            <View style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(5)}}
                source={ImagesPath.home.manImg}/>
            </View>
                <View style={{marginLeft:Utils.ScreenWidth(2)}}>
                    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.white}}>Vishesh Gatha</Text>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey2}} >Mumbai</Text>

                </View>
            </View>
                <View style={{height:Utils.ScreenHeight(40), 
                    marginTop:Utils.ScreenHeight(2),
                    width:Utils.ScreenHeight(40) }}>
                <Image 
                style={{height:Utils.ScreenHeight(40)
                   
                    , resizeMode:"cover", borderRadius:20
                    , width:Utils.ScreenHeight(40)}}
                source={{uri:"https://images.unsplash.com/photo-1610509528015-e4c30d95a5cf?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"}} />
            </View>
            <View style={{marginTop:Utils.ScreenHeight(2), marginHorizontal:Utils.ScreenWidth(2), flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3.5), width:Utils.ScreenWidth(9),}} source={ImagesPath.Ribbit.like}/>
                    </TouchableOpacity>
                    <Text style={{color:colors.white, fontSize:Utils.ScreenHeight(2),marginLeft:Utils.ScreenWidth(2)}}>2.3k</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3), width:Utils.ScreenHeight(3),}} source={ImagesPath.Ribbit.share}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3), width:Utils.ScreenHeight(3),marginLeft:Utils.ScreenWidth(3)}} source={ImagesPath.Ribbit.save}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginVertical:Utils.ScreenHeight(1), 
                flexDirection:"row", justifyContent:"flex-start", alignItems:"center",
                marginHorizontal:Utils.ScreenWidth(2)}}>
                <Text style={{fontSize:Utils.ScreenHeight(1.9),
                    fontWeight:500,
                    color:colors.white}}>Vishesh Gatha</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.7),
                   marginLeft:Utils.ScreenWidth(2),
                    color:colors.white}}>Living my best life here...</Text>
            </View>
            <TextInput
            placeholder='Write a comment'
            placeholderTextColor={colors.grey}
            textAlign='left'
            
            style={{borderWidth:1, borderColor:colors.inputBorder,
                borderRadius:12,
                height:Utils.ScreenHeight(4), paddingLeft:Utils.ScreenWidth(3)}}
            />
          

        </View>

        <View style={{marginTop:Utils.ScreenHeight(4),  borderColor:colors.grey2}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>

            <View style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(5)}}
                source={ImagesPath.home.manImg}/>
            </View>
                <View style={{marginLeft:Utils.ScreenWidth(2)}}>
                    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:600, color:colors.white}}>Vishesh Gatha</Text>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey2}} >Mumbai</Text>

                </View>
            </View>
                <View style={{height:Utils.ScreenHeight(40), 
                    marginTop:Utils.ScreenHeight(2),
                    width:Utils.ScreenHeight(40) }}>
                <Image 
                style={{height:Utils.ScreenHeight(40)
                   
                    , resizeMode:"cover", borderRadius:20
                    , width:Utils.ScreenHeight(40)}}
                source={ImagesPath.Ribbit.post} />
            </View>
            <View style={{marginTop:Utils.ScreenHeight(2), marginHorizontal:Utils.ScreenWidth(2), flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3.5), width:Utils.ScreenWidth(9),}} source={ImagesPath.Ribbit.like}/>
                    </TouchableOpacity>
                    <Text style={{color:colors.white, fontSize:Utils.ScreenHeight(2),marginLeft:Utils.ScreenWidth(2)}}>2.3k</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3), width:Utils.ScreenHeight(3),}} source={ImagesPath.Ribbit.share}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={{height:Utils.ScreenHeight(3), width:Utils.ScreenHeight(3),marginLeft:Utils.ScreenWidth(3)}} source={ImagesPath.Ribbit.save}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginVertical:Utils.ScreenHeight(1), 
                flexDirection:"row", justifyContent:"flex-start", alignItems:"center",
                marginHorizontal:Utils.ScreenWidth(2)}}>
                <Text style={{fontSize:Utils.ScreenHeight(1.9),
                    fontWeight:500,
                    color:colors.white}}>Vishesh Gatha</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.7),
                   marginLeft:Utils.ScreenWidth(2),
                    color:colors.white}}>Living my best life here...</Text>
            </View>
            <TextInput
            placeholder='Write a comment'
            placeholderTextColor={colors.grey}
            textAlign='left'
            
            style={{borderWidth:1, borderColor:colors.inputBorder,
                borderRadius:12,
                height:Utils.ScreenHeight(4), paddingLeft:Utils.ScreenWidth(3)}}
            />
          

        </View>
        


          {/* POSTS */}
        </View>

        




       

   </ScrollView>
   </SafeAreaView>
  )
}

export default HomeScreen