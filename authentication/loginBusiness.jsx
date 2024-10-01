import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import authStyles from "../styles/auth";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const LoginCreator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.106:8001/login/business/",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        await SecureStore.setItemAsync("access", response.data.access);
        await SecureStore.setItemAsync("refresh", response.data.refresh);
        navigation.navigate("AppTabs");
      } else {
        Alert.alert("Login Failed", "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error: ", error);
      Alert.alert("Login Failed", "An error occurred. Please try again.");
    }
  };

  return (
    <View style={authStyles.loginContainer}>
      <Text style={authStyles.title}>Business Login</Text>
      <TextInput
        style={authStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={authStyles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <CustomButton title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default LoginCreator;
