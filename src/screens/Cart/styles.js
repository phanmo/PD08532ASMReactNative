import { StyleSheet } from "react-native";
import { darkGreen } from "../../Constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: darkGreen,
        textAlign:'center',
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        borderWidth:1,
        borderColor: darkGreen,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor:'#fff',
    },
    image: {
        width: 50,
        height: 60,
        borderRadius: 8,
        marginRight: 15,
    },
    itemInfo: {
        flex: 1,
        justifyContent:'center',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: darkGreen,
    },
    price: {
        fontSize: 16,
        color: "gray",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    quantityButton: {
        backgroundColor: "#ccc",
        width: 30,
        height: 30, 
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    removeButton:{
        width: 12,
        height: 12,
    },
    totalContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        paddingTop: 10,
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "right",
    },
});

