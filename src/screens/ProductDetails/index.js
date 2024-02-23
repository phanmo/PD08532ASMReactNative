import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { products } from "../../components/data/products";
import styles from "./styles";

const ProductDetails = () => {
    const route = useRoute();
    const { productId } = route.params;
    console.log(productId)
    // Tìm sản phẩm trong danh sách products
    const product = products.find(item => item.id === productId);
    const navigation = useNavigation();
    
    const backToHome = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.backContainer} onPress={backToHome}>
                    <Image style={styles.backIcon} source={require('../../assets/icons/back.png')} />
                </TouchableOpacity>
                <Image style={styles.image} source={{ uri: product.image }} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Image style={styles.heart} source={require('../../assets/icons/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductDetails;
