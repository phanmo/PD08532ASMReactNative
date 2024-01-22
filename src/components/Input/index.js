import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInput}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/icons/eye_open.png')
                  : require('../../assets/icons/eye_close.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;