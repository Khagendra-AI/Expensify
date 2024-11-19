import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import AddExpense from '../../components/AddExpense';
import Button from '../../components/Button';
import ExpenseHistory from '../../components/ExpenseHistory';

const Expense = () => {
  return (
    <View style={styles.container}>
      <AddExpense />
      <ExpenseHistory />
    </View>
  );
};

export default Expense;
