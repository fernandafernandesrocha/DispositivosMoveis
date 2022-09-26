import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      
      feed:[
        {id: 1, cargo: 'Desenvolvedor BackEnd', salario: 'R$ 3.000,00', descricao: 'Programa, codifica e testa sistemas. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos.', contato: 'desenvolvedor_back@gmail.com'},
        {id: 2, cargo: 'Engenheiro de Dados', salario: 'R$ 3.000,00', descricao: 'profissional de engenharia, preocupado com a aplicação do conhecimento científico, matemático e da criatividade para desenvolver soluções para problemas técnicos.', contato: 'engenheiro_dados@gmail.com'},
        {id: 2, cargo: 'Desenvolvedor FrontEnd', salario: 'R$ 3.000,00', descricao: 'Programa interfaces de Web e ferramentas de edição de imagem. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos.', contato: 'desenvolvedor_front@gmail.com'}
      ]
    }
  }
 
  render(){
    return(
      
      <View style={styles.container}>
         <Text style={styles.text}>Vagas</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
         
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    color: '#F00',
    fontSize: 40,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
   
  },
  areaPessoa:{
    backgroundColor: '#f0ffff',
    height: 200,
    marginBottom: 20,
    textAlign: 'justify',
    
  },
  textoPessoa:{
    fontFamily: 'times',
    color: '#000',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
  },
 
})
 
export default App;
 
class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={{color: '#007FFF',textAlign: 'center', fontFamily: 'Lucida Bright', }}> Cargo: {this.props.data.cargo} </Text>
         <Text style={{textAlign: 'center',fontFamily: 'Lucida Bright',}}> Salário: {this.props.data.salario} </Text>
        <Text style={styles.textoPessoa}> Descrição: {this.props.data.descricao} </Text>
        <Text style={styles.textoPessoa}> Contato: {this.props.data.contato} </Text>
       
      </View>
    );
  }
}
