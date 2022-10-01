import React, { Component } from 'react';
import { View, StyleSheet, ScrollView,Text,Image,} from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>

          <Text style={styles.text}> Doceria Pedacinho do Céu </Text>
         
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
          <View style={styles.box1}>
           
           <Image source={require('./assets/bolo.jpg')} style={styles.imagem}/>
           <Text style={styles.nome}>Bolo de Brigadeiro com Morango</Text>
            <Text style={styles.nome}>R$ 80,00 Kg</Text>
          </View>

          <View style={styles.box2}>
          <Image source={require('./assets/boloNinhoNutella.jpg')} style={styles.imagem}/>
          <Text style={styles.nome1}>Bolo Ninho com Morango</Text>
          <Text style={styles.nome1}>R$ 90,00 Kg</Text>
          </View>

          <View style={styles.box3}>
          <Image source={require('./assets/boloNozes.jpg')} style={styles.imagem}/>
          <Text style={styles.nome2}>Bolo de Nozes</Text>
          <Text style={styles.nome2}>R$ 95,00 Kg</Text>

          </View>
          <View style={styles.box4}>
          <Image source={require('./assets/boloPrestigio.jpg')} style={styles.imagem}/>
          <Text style={styles.nome3}>Bolo de Prestígio</Text>
          <Text style={styles.nome3}>R$ 80,00 Kg</Text>
           
          </View>

          <View style={styles.box5}>
          <Image source={require('./assets/boloFrutasVermelhas.jpg')} style={styles.imagem}/>
          <Text style={styles.nome4}>Bolo de Frutas Vermelhas</Text>
          <Text style={styles.nome4}>R$ 85,00 Kg</Text>
           
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   
    flex: 1,
    justifyContent: "center",
    marginTop:100,
   
   
   
  },
  text:{
    textAlign: 'center',
    marginTop:20,
    fontSize: 50,
    color:'#A9CCE3',
    marginBottom:35,
    fontStyle:'italic',
    },

    imagem:{
   marginTop:30,
   width: 300, 
   height:200,
  
  },
   
   nome:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 26,
    fontWeight: 'bold',
    color:'#00A8',

   },
   nome1:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 30,
    color:'#B87333',

   },
   nome2:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 30,
    fontFamily :'serif' ,
    color:'#8E725F',

   },
   nome3:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 30,
    color:'#FFFFFF',

   },
  nome4:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 30,
    color:'#FF8C00',

   },  
  box1:{
    backgroundColor: '#E8F1F2',
    height: 400,
    width: 300,
  },
  box2:{
    backgroundColor: '#AFCDEA',
    height: 400,
    width: 300,
  },
  box3:{
    backgroundColor: '#E8F1F2',
    height: 400,
    width: 300,
  },
  box4:{
    backgroundColor: '#AFCDEA',
    height: 400,
    width: 300,
  },
  box5:{
    backgroundColor: '#E8F1F2',
    height: 400,
    width: 300,
  }
})
 
export default App;
