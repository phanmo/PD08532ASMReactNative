import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { styles } from "./styles";

const Profile =()=>{
    return( 
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Profile;