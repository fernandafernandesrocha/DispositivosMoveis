import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Dados Cadastrais';
    let nome1 = 'Formação';
    let nome2 = 'Experiência';
    let nome3 = 'Projetos';
    let img = 'https://avatars.githubusercontent.com/u/101155985?v=4';
 
    return(
      <View>
        
       
 
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, display:'flex'}}
        />
 
        <Text style={{ fontSize: 30, textAlign:'center' }}>{nome}</Text>
        <Text style={{textAlign:'center'}}>Nome: Fernanda Fernandes Rocha</Text>
        <Text style={{textAlign:'center'}}>Contato: (013) 99704-8124</Text>
        <Text style={{textAlign:'center'}}>Email: fer.fernandesrocha@gmail.com</Text>
        <br/> <br/>
        <Text style={{ fontSize: 30, textAlign:'center' }}>{nome1}</Text>
         <Text style={{textAlign:'center'}}>Faculdade de Tecnologia de Praia Grande</Text>
        <Text style={{textAlign:'center'}}>5º ciclo Análise e Desenvolvimento de Sistemas (gradução em julho de 2023)</Text>
        <br/> <br/>

        <Text style={{ fontSize: 30, textAlign:'center' }}>{nome2}</Text>
        <Text style={{textAlign:'center'}}>Estatutária da Prefeitura de Praia Grande (013) 99704-8124</Text>
        <br/> <br/>
        <Text style={{ fontSize: 30, textAlign:'center' }}>{nome3}</Text>
        <a style= {{textAlign:'center'}} href="https://github.com/fernandafernandesrocha">Conheça meu github</a>
       
      </View>
    )
  }
}
 
export default App;

