import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ExpenseTile = ({
  amount,
  category,
  date,
  name,
}: {
  amount: any;
  category: string;
  date: string;
  name: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.amountText}>${amount}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

export default ExpenseTile;
