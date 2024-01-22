import React from "react";
import { ImageBackground, View } from "react-native";

const Background = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/images/bgr.jpeg")}
                style={{ height: '100%'}} />
            <View style={{position:'absolute', width: '100%'}}>
                {children}
            </View>
        </View>
    );
}
export default Background;