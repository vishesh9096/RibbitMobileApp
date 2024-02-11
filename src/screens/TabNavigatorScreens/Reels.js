import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import Video from 'react-native-video';
import ImagesPath from '../../assests/ImagesPath';
const Reels = () => {
    //https://samplelib.com/lib/preview/mp4/sample-5s.mp4
    //https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4
    const arr =[1,2,3,4]
    const renderItem =({item,index})=>{
        return(

            <View style={[{flex:1,
            height:Utils.ScreenHeight(100), width:Utils.ScreenWidth(100)},

            ]}>
               <Video
               style={{height:Utils.ScreenHeight(100), width:Utils.ScreenWidth(100)}}
               resizeMode="cover"
                
               source={{uri:'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'}}
               />
               
               <View style={{position:"absolute", bottom:Utils.ScreenHeight(8), zIndex:4000,alignSelf:"center", flex:1,justifyContent:"center", right:Utils.ScreenWidth(5) }}>
               
               <TouchableOpacity>
               <Image style={{height:Utils.ScreenHeight(6), width:Utils.ScreenHeight(6),}} source={ImagesPath.Ribbit.usercircle}/>
               </TouchableOpacity>
               <View style={{marginTop:Utils.ScreenHeight(2),}}>
               <TouchableOpacity style={{ backgroundColor:colors.black,height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5), justifyContent:"center", alignItems:"center", borderRadius:100, alignSelf:"center"}}>
               <Image style={{height:Utils.ScreenHeight(3), resizeMode:"cover",width:Utils.ScreenWidth(6)}} source={ImagesPath.Ribbit.heart}/>
               
               </TouchableOpacity>
               <Text style={{textAlign:"center", color:colors.white, fontSize:Utils.ScreenHeight(1.7), fontWeight:400}}>8032</Text>
               </View>
               <View style={{marginTop:Utils.ScreenHeight(2),}}>
               <TouchableOpacity style={{ backgroundColor:colors.black,height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5), justifyContent:"center", alignItems:"center", borderRadius:100, alignSelf:"center"}}>
               <Image style={{height:Utils.ScreenHeight(3), resizeMode:"cover",width:Utils.ScreenWidth(6)}} source={ImagesPath.Ribbit.comment}/>
               
               </TouchableOpacity>
               <Text style={{textAlign:"center", color:colors.white, fontSize:Utils.ScreenHeight(1.7), fontWeight:400}}>8032</Text>
               </View>
               <View style={{marginTop:Utils.ScreenHeight(2),}}>
               <TouchableOpacity style={{ backgroundColor:colors.black,height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5), justifyContent:"center", alignItems:"center", borderRadius:100, alignSelf:"center"}}>
               <Image style={{height:Utils.ScreenHeight(3), resizeMode:"cover",width:Utils.ScreenWidth(7)}} source={ImagesPath.Ribbit.sharewhite}/>
               
               </TouchableOpacity>
               <Text style={{textAlign:"center", color:colors.white, fontSize:Utils.ScreenHeight(1.7), fontWeight:400}}>Share</Text>
               </View>
               <TouchableOpacity style={{marginTop:Utils.ScreenHeight(2)}}>
               <Image style={{height:Utils.ScreenHeight(6), width:Utils.ScreenHeight(6),}} source={ImagesPath.Ribbit.musictrack}/>
               </TouchableOpacity>
               
               
                </View>
                <View style={{position:"absolute", bottom:Utils.ScreenHeight(8), zIndex:4000,alignSelf:"center", flex:1,justifyContent:"center", left:Utils.ScreenWidth(6) }}>
                        <View style={{flexDirection:'row',marginTop:Utils.ScreenHeight(1),justifyContent:"flex-start", alignItems:'center'}}>
                        
                        
                        <Text style={{color:colors.white, fontWeight:500, fontSize:Utils.ScreenHeight(2)}}>@Jeniferlopez </Text>
                        <TouchableOpacity style={{borderWidth:1,
                            marginLeft:Utils.ScreenWidth(3),
                            borderRadius:12, borderColor:colors.primary, backgroundColor:colors.black, opacity:0.8}}>
                        <Text style={{color:colors.white, fontWeight:500 , paddingVertical:Utils.ScreenHeight(0.5),paddingHorizontal:Utils.ScreenHeight(1)}}>Follow</Text>
                        </TouchableOpacity>
                        </View>
                        <Text style={{color:colors.white, fontWeight:500}}>Groovin' to the Hip Hop Beat{'\n'} with the Squad!</Text>
                        <View style={{flexDirection:'row',marginTop:Utils.ScreenHeight(1),justifyContent:"center", alignItems:'center'}}>
                        <Image style={{height:Utils.ScreenHeight(2), width:Utils.ScreenHeight(2),}} source={ImagesPath.Ribbit.musicicon}/>
                        <Text style={{color:colors.white, fontWeight:500}}> Avicii - Waiting For Love (ft. </Text>
                        </View>
                </View>
                

            </View>
        )
    }
  return (
    <View>

        <FlatList
        data={arr}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={item=>item}
        decelerationRate={'normal'}
        />
        <View >
        
        </View>

    </View>
  )
}

export default Reels