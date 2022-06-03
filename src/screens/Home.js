import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput,ScrollView} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import Category from '../common/Category';
import New from '../common/New';
import Best from '../common/Best';

export default class Home extends React.Component {
    render(){
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor:"white",
                paddingHorizontal:20
                
            }}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40,
                    alignItems:"center"
                }}>
                    <View style={{
                        width:"50%"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:22
                        }}>APPARELS</Text>
                    </View>
                    <View style={{
                        width:"50%",
                        alignItems:"flex-end"
                    }}>
                        
                        
                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:"100%",
                    marginVertical:30
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        elevation:2,
                        width:"85%",
                        backgroundColor:"#FFF",
                        paddingHorizontal:20,
                        height:35,
                        borderRadius:10,
                        marginLeft:1
                    }}>
                        <Icon name="ios-search"
                           size={22}
                           color="#4f4a4a"
                           />
                            <TextInput
                                placeholder="Search to suite your fashion sense..."
                                style={{
                                fontFamily:"Medium",
                                paddingHorizontal:10,
                                fontSize:12
                            }}
                            />
                            </View>
                            
                            
                            <View style={{
                                alignItems:"center",
                                elevation:2,
                                width:"15%",
                                backgroundColor:"#FFF",
                                marginLeft:5,
                                height:35,
                                borderRadius:10,
                                marginLeft:1,
                                justifyContent:"center"
                            }}>
                                <Image
                                source={require("../images/sort.png")}
                                style={{
                                    width:18,height:25
                                }}
                                />
                            </View>
                   
                </View>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:18,
                        color:"#4f4a4a"
                    }}>
                        
                    </Text>
                    <View style={{
                        width:5,
                        height:5,
                        borderRadius:5,
                        marginHorizontal:5,
                        backgroundColor:"#4f4a4a"
                    }}></View>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:9,
                        color:"#4f4a4a"
                    }}>
                        QUALITY FASHION APPARELS TO SUITE YOUR TASTE
                    </Text>
                </View>


                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Category
                            src={require('../images/Image12.jpeg')}
                            name="Plaid T-Shirt"
                            onPress={()=>this.props.navigation.navigate('Detail2')}
                       
                       />
                         <Category
                            src={require('../images/Image17.jpeg')}
                            name="Just Do It T-shirt"
                            onPress={()=>this.props.navigation.navigate('Detail1')}
                       
                       />
                         <Category
                            src={require('../images/Image2.jpeg')}
                            name="Bayadere T-shirt"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />

                    </ScrollView>
                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Category
                            src={require('../images/Image6.jpeg')}
                            name="T-Shirt"
                            onPress={()=>this.props.navigation.navigate("Detail4")}
                       
                       />
                         <Category
                            src={require('../images/Image13.jpeg')}
                            name="T-shirt"
                            onPress={()=>this.props.navigation.navigate("Detail3")}
                       
                       />
                         <Category
                            src={require('../images/Image15.jpeg')}
                            name="T-shirt"
                            onPress={()=>this.props.navigation.navigate("Detail5")}
                       
                       />

                    </ScrollView>

                    <View style={{
                        flexDirection:"row",
                        marginTop:30,
                        marginBottom:10,
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#4f4a4a",
                            fontSize:20
                        }}>
                            NEW
                        </Text>
                        <View style={{
                            height:5,
                            width:5,
                            borderRadius:5,
                            backgroundColor:"#4f4a4a",
                            marginHorizontal:4
                        }}>
                        </View>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:10,
                            color:"#4f4a4a"
                        }}>
                            
                        </Text>
                    </View>

                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >

                        <New
                         src={require('../images/Image25.jpeg')}
                        />
                        <New
                        src={require('../images/Image26.jpeg')}
                        />
                        <New
                        src={require('../images/Image23.jpeg')}
                        />
                    </ScrollView>

                    <Text style={{
                        marginTop:20,
                        color:"#4f4a4a",
                        fontSize:18,
                        fontFamily:"Bold"
                    }}>
                        
                    </Text>
            
            
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal>

                    <Best/>
                    <Best/>
                    <Best/>
            </ScrollView>


            </ScrollView>
        );
    }
}