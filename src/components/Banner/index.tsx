import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'


const Banner = ({heading,imagename,info,color}:{heading:any,imagename:any,info:number,color:any}) => {
  return (
    
    <View style={styles.upperbanner}>
    <TouchableOpacity style={styles.item}>
        <Image source={imagename} style={styles.image} tintColor={color}/>
        <View style={styles.infoView}>
          <Text style={styles.totalText}>{heading}</Text>
          <Text style={styles.infotext}> {info}</Text>
        </View>
      </TouchableOpacity>

    </View>
   
  )
}

export default Banner

