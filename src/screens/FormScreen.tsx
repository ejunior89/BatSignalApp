import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import formScreenStyles from '../styles/formScreenStyles';

const FormScreen: React.FC = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [observacao, setObservacao] = useState('');

    const handleSubmit = () => {
        // Aqui você pode manipular os dados do formulário
        console.log('Nome:', nome);
        console.log('Telefone:', telefone);
        console.log('Localização:', localizacao);
        console.log('Observação:', observacao);
    };

    return (
        <View style={formScreenStyles.container}>
            <TextInput
                style={formScreenStyles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={formScreenStyles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={formScreenStyles.input}
                placeholder="Localização"
                value={localizacao}
                onChangeText={setLocalizacao}
            />
            <TextInput
                style={formScreenStyles.input}
                placeholder="Observação"
                value={observacao}
                onChangeText={setObservacao}
                multiline
            />
            <TouchableOpacity onPress={handleSubmit} style={formScreenStyles.button}>
                <Text style={formScreenStyles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FormScreen;
