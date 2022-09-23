import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput,Button} from 'react-native';
 
class App extends Component{

  constructor(props){
      super(props);
      this.state = {
       
       peso:0.00,
       altura:0.00,
       result: ' ',
      };

      this.Valor = this.Valor.bind(this)
      
  }

  Valor () {
       result = this.state.peso/(this.state.altura) * (this.state.altura);

        if (result < 18.5){
          this.setState({result:"Abaixo do Peso"})

        }else if(result > 18.5 && result < 24.9) {
                  this.setState({result:"Peso Normal"})

       } else if(result > 25 && result < 29.9) {
                  this.setState({result:"Sobrepeso"})

       } else if(result > 30 && result < 34.9) {
                  this.setState({result:"Obesidade grau ||"})
                
        } else if(result > 35 && result < 39,9) {
                  this.setState({result:"Obesidade grau ||"})
                
         }else {
                   this.setState({result:"Obesidade grau ||| ou Morbida"})
                                    
               
    }
        
}
  render(){
 
    return(
      <View  style={styles.centered} >
        <Text style={ styles.title}>Calculadora</Text>
        <Text style={ styles.title}>IMC</Text>
       
 
        <Imc/>
              
      <TextInput style={styles.input}placeholder="Peso"onChangeText={ ( p ) => 
                  this.setState({peso:p } ) } />
      <TextInput style={styles.input}placeholder="Altura"onChangeText={ ( a) => 
                 this.setState({altura:a } ) } />

      <Button style={styles.botao} title="Verificar" onPress={this.Valor} />

         <Text style={styles.result}>{this.state.result}</Text>


      
      
       
 
      </View>
    )
  }
}
 
class Imc extends Component {
  render(){
    
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4J7DxdFtWrGFLjqy4zsoeS7L9L7S0L8MjIQ&usqp=CAU';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 300, height:200}}
      />
    )
  }
}
 const styles = StyleSheet.create({
    input:{
      
    height: 50,
    borderWidth: 2,
    borderColor: '#FFA500',
    margin: 10,
    fontSize: 20,
    width: 300,
    color:'#FF8C00',
    alignItems: "center"
  },

  centered: {
   
    flex: 1,
    flexDirection: 'column',
    padding: 0.7,
    margin:100,
    justifyContent: "center",
    alignItems: "center",
    
  },  
    
  
  title: {
    flex:2,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#696969',
  },

   botao: {  
    flex: 10, 
    padding: 0.7,
    margin: 60,
    backgroundColor:'#FF0000'
   
   },

  
  result:{
   fontSize: 25,
   color: "#FF6961",
   fontWeight: 'bold',

    }
});
export default App;  