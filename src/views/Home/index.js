import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Botao from '../../components/Botao';


export default function Home(){
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <View>
        <Image
        source={require("../../assets/splash.png")}
        style={styles.img}
        />
        <Text style={styles.titulo}>Genius</Text>
        <Botao texto="Começar jogo" onpress={() => navigation.navigate('Game')}/>
      </View>
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
  img: {
    width: 250,
    height: 250
  },
  titulo: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center'
  }
})