import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useSelector } from 'react-redux';
import DetailTile from '../../components/DetailTile';

const Details = () => {
  const {totalExpenses,totalFunds,travel,other,food,rent} = useSelector((state: any) => {
    // console.log(state.mainapi)
     return state.mainapi;
   });
  return (
    <ScrollView style={styles.container} bounces={false}>
      <DetailTile type={" Travel"} typeinfo={travel}/>
      <DetailTile type={" Food"} typeinfo={food}/>
      <DetailTile type={" Rent"} typeinfo={rent}/>
      <DetailTile type={" Other"} typeinfo={other}/>
    </ScrollView>
  )
}

export default Details

