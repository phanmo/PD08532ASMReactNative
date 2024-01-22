import React from "react";
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import Background from "../../components/Background/Background";
import Button from "../../components/Button";
import { darkGreen} from "../../Constants";

const Splash = (props) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Planty</Text>
                <Text style={styles.slogan}>Increase your natural beauty</Text>
                <Image
                    resizeMode="contain"
                    style={styles.img}
                    source={require('../../assets/images/logo.png')}
                />

                <Button bgColor={darkGreen} textColor='white' btnLabel="Login"
                    onPress={() => props.navigation.navigate("Login")} />
                <Button bgColor='white' textColor={darkGreen} btnLabel="Register"
                    onPress={() => props.navigation.navigate("Register")} />
            </View>
        </Background>
    );
}
export default Splash;