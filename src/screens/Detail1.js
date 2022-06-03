import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwiperComponent1 from '../common/SwiperComponent1';
import Stars from 'react-native-stars';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    myStarStyle:{
        color:"#000",
        backgroundColor:'transparent',
        textShadowColor:"black",
        textShadowOffset:{width:1,height:1},
        textShadowRadius:2   
     },
     myEmptyStarStyle:{
         color:"white"
     }
});


export default class Detail extends React.Component {
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:"#FFF",
                paddingHorizontal:20
            }}>
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40
                }}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.goBack()}
                     style={{
                         width:"50%"
                     }}
                    >
                        <Image
                            source={require('../images/back.png')}
                            style={{
                                width:15,
                                height:15
                            }}
                        />
                    </TouchableOpacity>
                    
                </View>


                    <View style={{
                        flexDirection:"row",
                        height:340,
                        width:"100%"
                    }}>
                        <View style={{
                            marginTop:150
                        }}>
                            <View style={{
                                backgroundColor:"#3f3a42",
                                height:25,
                                width:25,
                                borderRadius:5,
                                borderWidth:2,
                                borderColor:"#FFF",
                                elevation:5
                            }}></View>
                             <View style={{
                                backgroundColor:"#707070",
                                height:25,
                                width:25,
                                borderRadius:5,
                                borderWidth:2,
                                borderColor:"#FFF",
                                elevation:5,
                                marginVertical:10
                            }}></View>
                             <View style={{
                                backgroundColor:"#b3b4b9",
                                height:25,
                                width:25,
                                borderRadius:5,
                                borderWidth:2,
                                borderColor:"#FFF",
                                elevation:5
                            }}></View>

                        </View>
                        <SwiperComponent1/>
                    </View>

                    
                        
                    
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        width:15,marginTop:20,
                        width:"100%"
                    }}>
                        <View style={{
                            width:"65%"
                        }}>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:18,
                                color:"#4f4a4a"
                            }}></Text>
                        </View>
                        <View style={{
                            width:"35%"
                        }}>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:9,
                                color:"#4f4a4a"
                            }}>Customers Rating</Text>
                            <View style={{
                                alignItems:"center",
                                flexDirection:"row"
                            }}>
                                <Stars
                                 default={4}
                                 count={5}
                                 half={true}
                                 starSize={20}
                                 fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                                 emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle,styles.myEmptyStarStyle]}/>}
                                 halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                                
                                />
                                <Text style={{
                                    fontSize:8,
                                    fontFamily:"Bold",
                                    marginHorizontal:5,
                                    paddingTop:4,
                                    color:"#b3aeae"
                                }}>
                                    98 Reviews
                                </Text>
                              </View>
                        </View>
                    </View>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:16,
                        color:"#b3aeae"
                    }}>324.69 USD</Text>
                    <Text style={{
                        fontFamily:"Medium",
                        fontSize:14,
                        lineHeight:20,
                        color:"#b3aeae",
                        marginTop:20
                    }}>
                        
                    </Text>


                    <ScrollView 
                    style={{marginTop:40}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                    >
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:80,
                            width:80,
                            borderRadius:25,
                            marginRight:20
                        }}>
                            <Image
                                source={require('../images/Image17.jpeg')}
                                style={{height:100,width:100}}
                            />
                        </View>

                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:80,
                            width:80,
                            borderRadius:25,
                            marginRight:20
                        }}>
                            <Image
                                source={require('../images/Image18.jpeg')}
                                style={{height:100,width:100}}
                            />
                        </View>
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:80,
                            width:80,
                            borderRadius:25,
                            marginRight:20
                        }}>
                            <Image
                                source={require('../images/Image19.jpeg')}
                                style={{height:100,width:100}}
                            />
                        </View>
                        
                        
                    </ScrollView>
                        


                        <View style={{
                            backgroundColor:"#000",
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:10,
                            padding:12,
                             marginBottom:15 
                            
                            }}>
                              

                        </View>
            </View>
        );
    }
}