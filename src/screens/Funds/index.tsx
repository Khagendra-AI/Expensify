import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddExpense from '../../components/AddExpense'
import ExpenseHistory from '../../components/ExpenseHistory'
import styles from './styles'
import AddFund from '../../components/AddFund'
import FundHistory from '../../components/FundHistory'

const Funds = () => {
  return (
    <View style={styles.container}>
     <AddFund/>
     <FundHistory/>
    </View>
  )
}

export default Funds

