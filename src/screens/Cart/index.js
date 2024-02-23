import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { styles } from "./styles";

const Cart =()=>{
    return( 
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Cart</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Cart;
