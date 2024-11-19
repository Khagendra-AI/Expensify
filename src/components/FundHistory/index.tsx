import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import ExpenseTile from '../ExpenseTile';
import { useSelector } from 'react-redux';
const DATA = [
  {
    id: '1',
    name: 'First Item',
    amount:'1',
    category:'s',
    date:'fd',
  },
  {
    id: '2',
    name: 'First Item',
    amount:'4',
    category:'fd',
    date:'vd',
  },
  {
    id: '3',
    name: 'First Item',
    amount:'34',
    category:'d',
    date:'bf',
  },
  {
    id: '4',
    name: 'First Item',
    amount:'34',
    category:'d',
    date:'bf',
  },
];
const FundHistory = () => {
  const {funds} = useSelector((state: any) => {
    //console.log(state.mainapi)
    return state.mainapi;
  });
  const fundsData=funds
  const renderItem = ({item}: {item: any}) => {
   
    // console.log('item in the renderItem', item.id);
    return (
      <ExpenseTile
        amount={item.amount}
        date={item.date}
        category={item.category}
        name={item.name}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
         <Text
          style={{color: 'white', fontWeight: '600', margin: 5, fontSize: 19}}>
          History
        </Text>
        <TouchableOpacity
          style={styles.touchableViewall}
          onPress={()=>{}}>
          <Text
            style={{color: '#00CCFF', fontWeight: '600', margin: 5, fontSize: 14}}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={fundsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    
  )
}

export default FundHistory

