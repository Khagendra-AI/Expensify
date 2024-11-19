import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

const Button = () => {
  return (
    <View style={styles.bcontainer}>
     <TouchableOpacity style={styles.touchableButton}>
      <Text style={styles.button}>
        ADD
      </Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button 

