import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider'

export default class appNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      telefone: '',
      sexo: '',
      peso: 0,
      termos: false,
    }
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(){
    alert("Olá Sr."+ this.state.nome + " " + this.state.telefone + " " + this.state.sexo + " " + this.state.peso.toFixed() +
      " " + this.state.termos
    )
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.containerBetween}>

        <Text style={styles.title}>Cadastro de Clientes</Text>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} onChangeText={(txt) => this.setState({nome: txt})} />

        <Text style={styles.label}>Telefone</Text>
        <TextInputMask style={styles.input}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(81)'
          }}
          value={this.state.telefone}
          onChangeText={text => {
            this.setState({
              telefone: text
            })
          }}
        />

        <Text style={styles.label}>Sexo</Text>
        <Picker 
        
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
        >
          <Picker.Item label="Masculino" value="m" />
          <Picker.Item label="Feminino" value="f" />
        </Picker>

        <Text style={styles.label}>Peso</Text>
        <Slider
        
          minimumValue={50}
          maximumValue={150}
          minimumTrackTintColor="#aeae"
          maximumTrackTintColor="#000000"
          onValueChange={(valorPeso) => this.setState({ peso: valorPeso })}
          value={this.state.peso}

        />
        <View style={{textAlign: "center", alignItems: "center"}}>
          <Text style={{fontSize:30}}>{this.state.peso.toFixed()}</Text>
        </View>

        <Text style={styles.label}>Aceita os termos?</Text>
        <View style={styles.switch}>
          <Switch

            value={this.state.termos}
            thumbColor={(this.state.termos) ? "#7fc7f4" : "#f4f3f4"}
            onValueChange={(valor) => this.setState({ termos: valor })}
          />
        </View>
        
      </View>
      <View style={styles.button}>
          {/* COLOCAR ESSE BOTAO FIXO LA EM BAIXO */}
          <Button style={{padding:30}} title="Cadastrar" onPress={() => this.cadastrar()} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#EBEEF5"

  },
  containerBetween:{
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#222',
    height: 40,
    padding: 10,
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center'
  },
  label: {
    marginTop: 5
  },
  switch: {
    alignItems: "flex-start",
    marginTop: 5
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    
  }

})