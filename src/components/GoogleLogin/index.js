import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

const GoogleLogin = () => {
    const handGoogleLogin = async () => {
        console.log('Test Google login');
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={handGoogleLogin}
            style={styles.container}
        >
            <Image style={styles.img} source={require('../../assets/icons/google.png')} />
        </TouchableOpacity>
    );
};
export default GoogleLogin;