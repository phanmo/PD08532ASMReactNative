import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Background from "../../components/Background/Background";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { darkGreen } from "../../Constants";
import Separator from "../../components/Separator";
import GoogleLogin from "../../components/GoogleLogin";
import { users } from "../../components/data/users";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Please fill in all fields");
            return;
        }
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            props.navigation.navigate("Tabs");
            Alert.alert("Logged in successfully!");

        } else {
            Alert.alert("Invalid email or password. Please try again.");
        }
    }

    return (
        <Background >
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.textContai}>
                        <Text style={styles.text1}>Welcome back</Text>
                        <Text style={styles.text2}>Login to your account</Text>
                    </View>
                    <Input label="Email"
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                    <Input
                        isPassword
                        label="Password"
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)} />
                    <View style={styles.forgotContainer}>
                        <Text style={styles.urlText}>Forgot password ?</Text>
                    </View>
                    <Button textColor='white'
                        bgColor={darkGreen}
                        btnLabel="Login"
                        onPress={handleLogin} />
                    <Separator text="Or login with"></Separator>
                    <GoogleLogin></GoogleLogin>
                    <View style={styles.registerView}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                            <Text style={styles.urlText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
}
export default Login;