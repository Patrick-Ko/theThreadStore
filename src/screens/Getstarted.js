import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Getstarted(params) {
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
      
      <Text style={{ fontSize: 30, color: "black" }}>WELCOME TO</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>JAMILA HOME</Text>
      

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 85,
          marginTop: 15,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
   
        <Text style={{ paddingLeft: 10, color: "white" }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 15,
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