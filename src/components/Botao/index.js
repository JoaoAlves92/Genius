import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({texto, onpress}) => {
    return(
        <TouchableOpacity style={styles.botao} onPress={onpress}>
            <Text style={styles.botaoTexto}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#F34040',
        borderRadius: 8,
        marginTop: 30
    },
    botaoTexto: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20
    }
})

export default Botao