import React from 'react'
import {Image,StyleSheet,Text,View} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    },

})

export default class SwiperComponent extends React.Component {
    render(){
        return(
            <Swiper
            style={styles.wrapper}
            dotStyle={{
                backgroundColor:"#000",
                borderColor:"#000",
                borderWidth:1,
                width:10,
                height:10,
                borderRadius:10
            }}
            activeDotColor="#FFF"
            activeDotStyle={{
                borderColor:"#000",
                borderWidth:1,
                width:10,
                height:10,
                borderRadius:10
            }}
           
           >
               <View style={styles.slide}>
                   <Image
                     source={require('../images/Image15.jpeg')}
                     style={{height:200,width:300}}
                    />

               </View>
               <View style={styles.slide}>
                   <Image
                     source={require('../images/Image16.jpeg')}
                     style={{height:200,width:300}}
                    />

               </View>
               <View style={styles.slide}>
                   <Image
                     source={require('../images/Image7.jpeg')}
                     style={{height:200,width:300}}
                    />

               </View>
            
            </Swiper>
        );
    }
}