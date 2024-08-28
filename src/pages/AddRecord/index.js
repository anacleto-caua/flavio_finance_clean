import React, { useState } from 'react'

// import CheckBox from '@react-native-community/checkbox';

import CheckBox from '../../components/Checkbox'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { Button, Input } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { supabase } from '../../services/supabase.ts'

import { v4 as uuidv4 } from 'uuid';

export default function Auth() {
  const navigation = useNavigation()

  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState(false)



  return (
    <View style={styles.container}>

      <View style={styles.valuesContainer}>

        <Input
          label="Descrição"
          onChangeText={(title) => setTitle(title)}
          value={title}
          placeholder='Restaurante...'
        />

        <Input
          label="Valor"
          onChangeText={(value) => setValue(value)}
          value={value}
          placeholder='100.00'
        />

        <Input
          label="Data"
          onChangeText={(date) => setDate(date)}
          value={date}
          placeholder='dd/mm/aaaa'
        />

        <View style={styles.checkBoxContainer}>

          <View>
            <Text style={styles.typeTitle}>Tipo</Text>
            <CheckBox
              value={type}
              onChangeText={() => setType()}
              style={styles.income}
            />
          </View>
          
        </View>

        <View style={styles.buttonsContainer}>
          
          <View style={styles.btnContainer}>
            <Button title="Confirmar" onPress={
              async () => {
                var typeValue;

                type === false ? typeValue = 0 : typeValue = 1;
               

                console.log(typeValue);
                console.log(type)

                const { data, error } = await supabase.from('account_records').insert([
                  {
                    label: title,
                    value: value,
                    date: date,
                    type: typeValue,
                  },
                ])

                if(!error){
                  navigation.navigate('Home');
                }else{
                    alert(error);
                    alert(error.message);
                }
              }
              
            } />
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonText]} onPress={() => navigation.navigate("Home")}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>
        
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    padding: 2,
    width: "50%",
  },

  valuesContainer: {
    paddingTop: 4,
    paddingBottom: 4,
  },

  checkBoxContainer: {
    marginTop: 20,
  },

  buttonsContainer: {
    marginTop: 10,
  },

  btnContainer: {
    marginTop: 5,
    marginStart: 10,
  },

  income: {
    color: "#000000",
  },

  outcome: {
    color: "#4f32ff",
  },

  typeTitle: {
    fontSize: 16,
    marginStart: 10,
    fontWeight: "bold",
    color: "#7c7c8a",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#fff',
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    borderColor: '#e74c3c',
    borderWidth: 1,
    marginStart: 15,
  },
  
  buttonText: {
    color: '#fff',
    backgroundColor: '#e74c3c',
    fontSize: 18,
  },
})