import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function useAsyncState(initialValue) {
    const [value, setValue] = useState(initialValue);
    const setter = x =>
      new Promise(resolve => {
        setValue(x);
        resolve(x);
      });
    return [value, setter];
}

export default function Game() {
    const [pressionado, setPressionado] = useState();
    const [sequencia, setSequencia] = useAsyncState([Math.floor(Math.random() * 4)]);
    const [sequenciaJogador, setSequenciaJogador] = useAsyncState([])
    const [rodada, setRodada] = useState(1);
    const navigation = useNavigation();

    useEffect(async () => {
        await sleep(500)
        partida()
    }, [rodada])

    async function partida() {
        for (let num of sequencia) {
            botaoBeep(num)
            await sleep(1500)
        }
    }

    async function verificaJogada() {
        if (sequencia.toString().startsWith(sequenciaJogador)) {
            if (sequencia.toString() == sequenciaJogador.toString()) {
                await setSequenciaJogador([])
                await setSequencia(listaAntiga => [...listaAntiga, Math.floor(Math.random() * 4)])
                setRodada(rodada + 1)
            } else {
                return;
            }
        } else if (JSON.stringify(sequencia) != JSON.stringify(sequenciaJogador)) {
            navigation.push("Perdeu")
        } else {
            return;
        }
    }

    function botaoBeep(num, user=false) {
        if (num == 0) {
            setPressionado(0)
            let som = new Sound('https://www.beepzoid.com/ringtones/Bell-1.mp3', null, (error) => {
                if (error) {
                    alert(error)
                    return;
                }
                som.play(async () => {
                    som.release()
                    setPressionado('')
                    if (user) {
                        sequenciaJogador.push(num)
                        const newValue = await setSequenciaJogador(sequenciaJogador)
                        verificaJogada()
                    }
                })
            })
        } else if (num == 1) {
            setPressionado(1)
            let som = new Sound('https://www.beepzoid.com/ringtones/Bell-2.mp3', null, (error) => {
                if (error) {
                    alert(error)
                    return;
                }
                som.play(async () => {
                    som.release()
                    setPressionado('')
                    if (user) {
                        sequenciaJogador.push(num)
                        const newValue = await setSequenciaJogador(sequenciaJogador)
                        verificaJogada()
                    }
                })
            })
        } else if (num == 2) {
            setPressionado(2)
            let som = new Sound('https://www.beepzoid.com/ringtones/Bell-3.mp3', null, (error) => {
                if (error) {
                    alert(error)
                    return;
                }
                som.play(async () => {
                    som.release()
                    setPressionado('')
                    if (user) {
                        sequenciaJogador.push(num)
                        const newValue = await setSequenciaJogador(sequenciaJogador)
                        verificaJogada()
                    }
                })
            })
        } else if (num == 3) {
            setPressionado(3)
            let som = new Sound('https://www.beepzoid.com/ringtones/Bell-4.mp3', null, (error) => {
                if (error) {
                    alert(error)
                    return;
                }
                som.play(async () => {
                    som.release()
                    setPressionado('')
                    if (user) {
                        sequenciaJogador.push(num)
                        const newValue = await setSequenciaJogador(sequenciaJogador)
                        verificaJogada()
                    }
                })
            })
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.partes}>
                <TouchableOpacity onPress={ () => botaoBeep(0, true) }>
                    <View style={[styles.lado1, styles.botao, {backgroundColor: pressionado === 0 ? '#05FFEB' : '#00CABA'}]}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => botaoBeep(1, true) }>
                    <View style={[styles.lado2, styles.botao, {backgroundColor: pressionado === 1 ? '#FF9697' : '#EC6869'}]}></View>
                </TouchableOpacity>
            </View>
            <View style={styles.partes}>
                <TouchableOpacity onPress={ () => botaoBeep(2, true) }>
                    <View style={[styles.lado3, styles.botao, {backgroundColor: pressionado === 2 ? '#FFE124' : '#F9E87E'}]}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => botaoBeep(3, true) }>
                    <View style={[styles.lado4, styles.botao, {backgroundColor: pressionado === 3 ? '#38DCFF' : '#00ACD1'}]}></View>
                </TouchableOpacity>
            </View>

            <View style={styles.circulo}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121F2F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    partes: {
        display: 'flex',
        flexDirection: 'row'
    },
    botao: {
        height: 100,
        width: 100,
        margin: 5
    },
    lado1: {
        borderTopLeftRadius: 100
    },
    lado2: {
        borderTopRightRadius: 100
    },
    lado3: {
        borderBottomLeftRadius: 100
    },
    lado4: {
        borderBottomRightRadius: 100
    },
    circulo: {
        backgroundColor: '#121F2F',
        height: 100,
        width: 100,
        position: 'absolute',
        borderRadius: 100
    }
})