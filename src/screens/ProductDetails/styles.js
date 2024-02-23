import { StyleSheet } from "react-native";
import { darkGreen, green } from "../../Constants";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    backContainer: {
        position: 'absolute',
        borderRadius: 8,
        backgroundColor: '#fff',
        zIndex: 1, 
        top: 60,
        left: 30,
    },
    backIcon: {
        width: 20,
        height: 20,
        margin: 10,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '42%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    title: {
        color: darkGreen,
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    price: {
        color: green,
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 5,
    },
    description: {
        color: 'gray',
        fontSize: 16,
        height: '40%',
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: green,
        paddingHorizontal: 50,
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    heart: {
        width: 50,
        height: 50,
    }
})