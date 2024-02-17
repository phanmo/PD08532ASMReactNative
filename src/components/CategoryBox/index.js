import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const CategoryBox = ({ title, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container} >
            <View style={styles.imageContainer} >
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};
export default CategoryBox;
