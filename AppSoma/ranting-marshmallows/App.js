import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valor1:'',
      valor2:'',
      resultado:0.00,
    };
    
    this.somaNumero = this.somaNumero.bind(this);
  }
 
  somaNumero(){
     
    resultado = parseInt(this.state.valor1) + parseInt(this.state.valor2);

    if(resultado < 0.1){
      this.setState({ resultado: 'Digite um numero válido' });
    }
    else{
      this.setState({ resultado: 'A soma é: ' + resultado});
    }
  }
  
  class 
  render(){

    let img = 'https://media.istockphoto.com/vectors/vector-calculator-cartoon-isolated-drawing-vector-id1224750981';

    return(
      <View style={styles.centered}>
        <Text style={{color: 'gray',textAlign: 'center',fontSize: 20,fontWeight: 'bold', fontStyle: 'italic', borderBottom: 'thick double #808080',}}>Somando dois números</Text>
        <Image source={{ uri: img }} style={{ width: 250, height: 200,}}/>

        <TextInput style={styles.input} placeholder="Digite o primeiro número" onChangeText={ (valor1) => this.setState({valor1}) }/>
        <TextInput style={styles.input} placeholder="Digite o segundo número" onChangeText={ (valor2) => this.setState({valor2}) }/>

        <Button title="Somar" onPress={this.somaNumero} />
        
        <Text style={styles.texto}>{this.state.resultado}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  centered: {
    margin: 40,
    flex:1,
    jutifyContent: "center",
    alignItem: "center",   
  },
  input:{
    textAlign: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 5,
    fontSize: 14,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#FFB6C0',
  },
  texto:{
    margin: 20,
    textAlign: 'center',
    fontSize: 25,
    backgroundColor:'#40E0D0',
    fontWeight: 'bold',
    color: 'white',
  }
})
 
export default App;