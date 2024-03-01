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
  textAlign:'center',
},
productsList:{
    paddingHorizontal: 10,
}
})