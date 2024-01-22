import { StyleSheet } from "react-native";
import { darkGreen } from "../../Constants";

export const styles = StyleSheet.create({
   label: {
      color: darkGreen,
      marginBottom: 2,
      fontSize: 14,
      fontWeight: '500',

   },
   textInput:{
    borderRadius: 100,
    color:'black',
    padding: 14,
    width:'100%',
    backgroundColor: 'rgb(220, 220, 220)',
    marginBottom:15,
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   eye: {
      width: 18,
      height: 18,
   },
});