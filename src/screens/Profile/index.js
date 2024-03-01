import React, { useState, useContext } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import { styles } from "./styles";
import { useUser } from "../../UserContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { setUser } = useUser(useContext) // Use context here
    const navigation = useNavigation();

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleLogout = () => {
        setUser(null);
        navigation.navigate('Login');
        setModalVisible(false);
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Profile</Text>
                <TouchableOpacity style={styles.logoutContainer} onPress={openModal}>
                    <Image style={styles.logoutImg} source={require('../../assets/icons/logout.png')} />
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
                            <View style={styles.modalButtons}>
                                <Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
                                    <Text style={styles.buttonText}>No</Text>
                                </Pressable>
                                <Pressable style={[styles.button, styles.buttonConfirm]} onPress={handleLogout}>
                                    <Text style={styles.buttonText}>Yes</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
