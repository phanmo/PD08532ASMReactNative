import { StyleSheet } from "react-native";
import { darkGreen } from "../../Constants";

export const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        alignItems: 'center',
        width:'100%',
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 40,
    },
    innerContainer: {
        backgroundColor: '#fff',
        height: 720,
        width: '100%',
        paddingTop: 30,
        borderTopLeftRadius: 120,
        paddingHorizontal: 20,
    },
    textContai:{
        alignItems: 'center'
    },
    text1: {
        fontSize: 35,
        color: darkGreen,
        fontWeight: "bold",
    },
    text2: {
        color: 'grey',
        fontSize: 19,
        marginBottom: 20,
        fontWeight: "bold",
    },
    forgotContainer:{
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 16,
        marginBottom: 80,
    },
    urlText: {
        color: darkGreen,
        fontWeight:'bold',
        fontSize: 16,
    },
    loginView:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 20,
    },
    checkRow:{
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkText: {
        color: 'black',
        fontSize: 14,
        fontWeight:'500',
        marginHorizontal: 10,
    },
});