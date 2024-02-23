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
import { users } from "../../components/data/users";

const Register = (props) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const handleRegister = () => {
        // Kiểm tra nếu có trường thông tin trống
        if (!fullname || !email || !password) {
            Alert.alert("Please fill in all fields");
            return;
        }
        // Kiểm tra điều khoản đã được check
        if (!checked) {
            Alert.alert("Please agree to Terms & Privacy");
            return;
        }
        // Kiểm tra xem email đã được sử dụng chưa
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            Alert.alert("Email already exists. Please use another email.");
            return;
        }
        // Tạo user mới
        const newUser = {
            id: (users.length + 1).toString(), 
            fullname: fullname,
            email: email,
            password: password
        };

        // Thêm user mới vào danh sách users
        users.push(newUser);
        Alert.alert("Account created successfully!");
        props.navigation.navigate("Login");
    }

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.textContai}>
                        <Text style={styles.text1}>Create account</Text>
                        <Text style={styles.text2}>Please enter info to create account</Text>
                    </View>
                    <Input
                        label="Fullname"
                        placeholder="Username"
                        value={fullname}
                        onChangeText={(text) => setFullname(text)}
                    />
                    <Input
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        isPassword
                        label="Password"
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <View style={styles.checkRow}>
                        <Checkbox checked={checked} onCheck={setChecked} />
                        <Text style={styles.checkText}>I agree with Term & Privacy</Text>
                    </View>
                    <Button
                        textColor='white'
                        bgColor={darkGreen}
                        btnLabel="Register"
                        onPress={handleRegister}
                    />
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
