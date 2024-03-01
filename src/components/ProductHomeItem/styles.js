import { Dimensions, StyleSheet } from "react-native";
import { darkGreen } from "../../Constants";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        margin: 8,
        backgroundColor:'#fff',
        padding: 5,
        borderRadius: 8,
    },
    title:{
        color: '#606060',
        fontSize: 15,
        paddingVertical: 8,
        color: darkGreen,
        fontWeight:'500',
    },
    image:{
        width:(width-74)/2,
        height: 210,
        borderRadius: 8,
    },
    price:{
        color:'gray',
        paddingBottom: 8,
        fontWeight:'500',
    },
});

