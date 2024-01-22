import { StyleSheet } from "react-native";
import { darkGreen, green } from "../../Constants";
export const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    alignItems: 'center',
    marginVertical: 20,
},
line:{
    height: 1,
    backgroundColor: darkGreen,
    flex: 1,
},
text:{
    color: green,
    fontWeight: '500',
    marginHorizontal: 8,
},
});