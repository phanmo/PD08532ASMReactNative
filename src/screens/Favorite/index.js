import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { products } from "../../components/data/products";
import { favorites } from "../../components/data/favorites";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../UserContext";
import ProductHomeItem from "../../components/ProductHomeItem";

const Favorite = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const navigation = useNavigation();
    const { userId } = useUser();

    useEffect(() => {
        const userFavorites = favorites.find(user => user.userId === userId)?.favorite;
        if (userFavorites) {
            const favoriteProductList = products.filter(product => userFavorites.some(fav => fav.id === product.id));
            setFavoriteProducts(favoriteProductList);
        }
    }, [userId]);

    const handleProductDetails = (productId) => {
        navigation.navigate('ProductDetails', { productId });
    };

    const renderProductItem = ({ item }) => {
        return (
            <ProductHomeItem
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                onPress={() => handleProductDetails(item.id)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Favorite Products</Text>
            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={favoriteProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)}
                
            />
        </SafeAreaView>
    );
};

export default Favorite;
