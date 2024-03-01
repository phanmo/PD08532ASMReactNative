import { StyleSheet } from "react-native";
import { darkGreen } from "../../Constants";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: darkGreen,
        textAlign: 'center',
    },
    logoutContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutImg:{
        width: 24,
        height: 24,
        color: darkGreen,
        marginRight: 10,
    },
    logoutText:{
        fontSize: 16,
        fontWeight: '500',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        minWidth: 80,
        alignItems: 'center',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    buttonConfirm: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})