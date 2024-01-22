import { StyleSheet } from "react-native";
import { darkGreen } from "../../Constants";

export const styles = StyleSheet.create({
container:{
    backgroundColor: '#fff',
    borderRadius: 14,
    width: '50%',
    borderWidth: 2,
    borderColor: darkGreen,
    alignSelf: 'center',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 40,
},
img:{
    width: 30,
    height: 30,
}
});