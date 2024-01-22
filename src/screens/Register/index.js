import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Background from "../../components/Background/Background";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { darkGreen } from "../../Constants";
import Checkbox from "../../components/Checkbox";
import Separator from "../../components/Separator";
import GoogleLogin from "../../components/GoogleLogin";

const Register = (props) => {
    const [checked, setChecked] = useState(false);
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.textContai}>
                        <Text style={styles.text1}>Create account</Text>
                        <Text style={styles.text2}>Please enter info to create account</Text>
                    </View>
                    <Input label="Fullname" placeholder="Username" />
                    <Input label="Email" placeholder="Email" />
                    <Input isPassword label="Password" placeholder="Password" secureTextEntry={true} />
                    {/* <Input isPassword label="Confirm password" placeholder="Confirm password" secureTextEntry={true} /> */}
                    <View style={styles.checkRow}>
                        <Checkbox checked={checked} onCheck={setChecked} />
                        <Text style={styles.checkText}>I agree with Term & Privacy</Text>
                    </View>
                    <Button textColor='white' bgColor={darkGreen} btnLabel="Register"
                        onPress={() => Alert.alert("Account created")} />
                    <Separator text="Or register with"></Separator>
                    <GoogleLogin></GoogleLogin>
                    <View style={styles.loginView}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles.urlText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
}
export default Register;