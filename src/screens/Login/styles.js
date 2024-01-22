import { StyleSheet } from "react-native";
import { darkGreen, green } from "../../Constants";
export const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 40,
    },
    textContai:{
        alignItems: 'center'
    },
    innerContainer: {
        backgroundColor: '#fff',
        height: 720,
        width: '100%',
        paddingTop: 30,
        borderTopLeftRadius: 120,
        paddingHorizontal: 20,
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
        marginBottom: 20,
    },
    urlText: {
        color: darkGreen,
        fontWeight:'bold',
        fontSize: 16,
    },
    registerView:{
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
});