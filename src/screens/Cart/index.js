import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useUser } from "../../UserContext";
import { products } from "../../components/data/products";
import { carts } from "../../components/data/carts";
import Header from "../../components/Header";

const Cart = () => {
    const { userId } = useUser();
    const userCart = carts.find(cart => cart.userId === userId);
    const [cartItems, setCartItems] = useState(userCart ? userCart.cart : []);

    const increaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const removeItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const totalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const product = products.find(p => p.id === item.id);
            totalPrice += parseFloat(product.price.replace("$ ", "")) * item.quantity;
        });
        return totalPrice.toFixed(2);
    };

    const renderCartItem = ({ item }) => {
        const product = products.find(p => p.id === item.id);
        return (
            <SafeAreaView>
                <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: product.image }} />
                    <View style={styles.itemInfo}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.id)}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => removeItem(item.id)}>
                        <Image style={styles.removeButton}
                            source={require('../../assets/icons/x.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Your Cart</Text>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${totalPrice()}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Cart;
