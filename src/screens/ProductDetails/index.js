import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { products } from "../../components/data/products";
import styles from "./styles";
import { useUser } from "../../UserContext";
import { addProduct, favorites } from "../../components/data/favorites";
import { carts } from "../../components/data/carts";

const ProductDetails = () => {
    const route = useRoute();
    const { productId } = route.params;
    const { userId } = useUser();
    // Tìm sản phẩm trong danh sách products
    const navigation = useNavigation();
    const product = products.find(item => item.id === productId);

    const [heartIcon, setHeartIcon] = useState(
        favorites.find(user => user.userId === userId)?.favorite.some(p => p.id === productId)
            ? require('../../assets/icons/tabs/heart_active.png')
            : require('../../assets/icons/tabs/heart.png')
    );

    useEffect(() => {
        setHeartIcon(
            favorites.find(user => user.userId === userId)?.favorite.some(p => p.id === productId)
                ? require('../../assets/icons/tabs/heart_active.png')
                : require('../../assets/icons/tabs/heart.png')
        );
    }, [favorites, productId, userId]);

    const toggleFavorite = () => {
        if (userId) {
            const userIndex = favorites.findIndex(user => user.userId === userId);
            if (userIndex !== -1) {
                const favoriteIndex = favorites[userIndex].favorite.findIndex(p => p.id === productId);
                if (favoriteIndex === -1) {
                    // Thêm sản phẩm vào danh sách yêu thích
                    favorites[userIndex].favorite.push({ id: productId });
                    setHeartIcon(require('../../assets/icons/tabs/heart_active.png'));
                    Alert.alert("Product added to favorites!");
                } else {
                    // Xoá sản phẩm khỏi danh sách yêu thích
                    favorites[userIndex].favorite.splice(favoriteIndex, 1);
                    setHeartIcon(require('../../assets/icons/tabs/heart.png'));
                    Alert.alert("Product removed from favorites!");
                }
            } else {
                // Người dùng chưa có trong favorites, tạo mới
                favorites.push({ userId, favorite: [{ id: productId }] });
                setHeartIcon(require('../../assets/icons/tabs/heart_active.png'));
                Alert.alert("Product added to favorites!");
            }
        } 
    };
    
    

    const addToCart = () => {
        if (userId) {
            // Tìm giỏ hàng của người dùng trong cartData
            const userCartIndex = carts.findIndex(item => item.userId === userId);
            
            if (userCartIndex !== -1) {
                // Người dùng đã có giỏ hàng, kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
                const existingProductIndex = carts[userCartIndex].cart.findIndex(item => item.id === product.id);
                
                if (existingProductIndex !== -1) {
                    // Sản phẩm đã tồn tại, tăng quantity lên 1
                    carts[userCartIndex].cart[existingProductIndex].quantity++;
                } else {
                    // Sản phẩm chưa tồn tại, thêm vào giỏ hàng với quantity là 1
                    carts[userCartIndex].cart.push({ id: product.id, quantity: 1 });
                }
            } else {
                // Người dùng chưa có giỏ hàng, tạo mới giỏ hàng với sản phẩm và quantity là 1
                carts.push({
                    userId: userId,
                    cart: [{ id: product.id, quantity: 1 }]
                });
            }

            Alert.alert("Product added to cart!");
            // Chuyển sang màn hình CartScreen
            navigation.navigate('Cart');
        } 
    };

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
                    <TouchableOpacity onPress={toggleFavorite}>
                        <Image style={styles.heart} source={heartIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={addToCart}>
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductDetails;
