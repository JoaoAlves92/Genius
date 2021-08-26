import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';
import Botao from '../../components/Botao';

export default function Perdeu() {
    const navigation = useNavigation()

    useEffect(() => {
        let som = new Sound('https://www.beepzoid.com/ringtones/GameOver.mp3', null, (error) => {
            if (error) {
                alert(error)
                return;
            }
            som.play(() => {
                som.release()
            })
        })
    })
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Você perdeu</Text>
            <Botao texto="Reiniciar jogo" onpress={() => navigation.push('Game')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121F2F'
    },
    texto: {
        color: 'white',
        fontSize: 30,
        marginBottom: 30
    }
})