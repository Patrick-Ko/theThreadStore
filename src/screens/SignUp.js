import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SignUp(params) {
  const navigation = params.navigation;
  return (
    <ImageBackground source={require("../images/thread.png")}
      style={{
        backgroundColor: "violet",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
          
      
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "black"}}>Sign Up Here</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold", color: "black" }}>JAMILA HOME</Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 70,
            marginTop: 20,
          }}
          placeholder="Enter your username"
        />
      </View>
      <View style={{ marginTop: 12,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 74,
          }}
          placeholder="Create a password"
        />
      </View>
      <View style={{ marginTop: 12,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Confirm your password"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 25,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        
        <Text style={{ paddingLeft: 10, color: "white" }}>Sign Up</Text>
        
      </TouchableOpacity>
      
      
    </ImageBackground>
  );
}