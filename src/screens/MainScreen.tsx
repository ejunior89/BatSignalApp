import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import mainScreenStyles from '../styles/mainScreenStyles';

interface MainScreenProps {
    navigateToFormScreen: () => void; // Função para navegar para a tela do formulário
}

const MainScreen: React.FC<MainScreenProps> = ({ navigateToFormScreen }) => {
    return (
        <View style={mainScreenStyles.container}>
            <Image source={require('../logos/batsignal.jpg')} style={mainScreenStyles.logo} />
            <Text style={mainScreenStyles.text}>Bem-vindo ao Bat Signal!</Text>
            <TouchableOpacity onPress={navigateToFormScreen} style={mainScreenStyles.button}>
                <Text style={mainScreenStyles.buttonText}>Pedir Ajuda!!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainScreen;
