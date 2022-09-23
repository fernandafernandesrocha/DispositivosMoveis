import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valorGasolina:0.00,
      valorAlcool:0.00,
      resultado:'',
    };
    
    this.melhorValor = this.melhorValor.bind(this);
  }
 
  melhorValor(){
     
    resultado = this.state.valorAlcool / this.state.valorGasolina;

    if(resultado < 0.7){
      this.setState({ resultado: 'Melhor escolha: Álcool' });
    }
    else{
      this.setState({ resultado: 'Melhor escolha: Gasolina' });
    }
  }
  
  class 
  render(){

    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVPRAbntL8fsLwzlJBCsg-L5VZUiAWNfwng&usqp=CAU';

    return(
      <View style={styles.centered}>
        <Image source={{ uri: img }} style={{ width: 200, height: 200}}/>

        <TextInput style={styles.input} placeholder="Preço do alcool" onChangeText={ (valorAlcool) => this.setState({valorAlcool: valorAlcool}) }/>
        <TextInput style={styles.input} placeholder="Preço da gasolina" onChangeText={ (valorGasolina) => this.setState({valorGasolina: valorGasolina}) }/>

        <Button title="Calcular" onPress={this.melhorValor} />
        
        <Text style={styles.texto}>{this.state.resultado}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  centered: {
    flex:1,
    jutifyContent: "center",
    alignItem: "center",   
  },
  input:{
    textAlign: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    backgroundColor:'#40E0D0'
  }
})
 
export default App;

