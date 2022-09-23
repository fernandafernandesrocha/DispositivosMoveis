import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput,Button} from 'react-native';
 
class App extends Component{

  constructor(props){
      super(props);
      this.state = {
       
       
        result: ' ',
      };

      this.Numero = this.Numero.bind(this)

  }

  Numero () {

         result = Math.floor(Math.random() * 10)

       this.setState({result})

   }    

  render(){
    return(
          <View  style={styles.centered} >
            <Text style={ styles.title}>Jogo Número aleatório</Text>
          <Aleatorio/>
                  <Text style={ styles.text}>Pense em um Numero de 0 a 10</Text>

          

            <Text style={styles.result}>{this.state.result}</Text>
            
            <Button style={styles.botao} title="Descobrir" onPress={this.Numero} />
       
 
      </View>
    )
  }
}
 
class Aleatorio extends Component {
  render(){
    
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqc8e1rYGBy5w-ienaHioz8xYq1RMN0MXcIA&usqp=CAU';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 250, height:250}}
      />
    )
  }
}
 const styles = StyleSheet.create({
   text:{
     flex:2,
     width: 300,
    fontSize: 20,
    margin: 15,
    fontStyle: 'italic' ,
    color:'#8B0000',
    textDecoration: 'underline',

   },
  centered: {
    flex: 1,
    flexDirection: 'column',
    margin:200,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
  },  
    
  
  title: {
    flex:2,
    width: 400,
    fontSize: 28,
    fontStyle: 'italic' ,
    color:'#8B0000',
    fontWeight: 'bold',
    paddingVertical: 40,
   
  },

    botao: {  
    flex: 60, 
    margin: 60,
    
   },
 
  result:{
   fontSize: 80,
   color: 'black',
   fontWeight: 'bold',
    }
});

export default App;        