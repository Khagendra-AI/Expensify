import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {saveExpense, saveFunds} from '../../redux/config/configSlice';

const AddFund = () => {
  const dispatch = useDispatch();

  const [user, setUsers] = useState({
    amount: '',
    name: '',
    date: '',
    category: '',
  });
  const pressbutton = () => {
    dispatch(saveFunds(user));
    setUsers({amount: '', name: '', date: '', category: ''});
  };
  const onAmountChange = (e: any) => {
    setUsers({...user, amount: e});
    // console.log(user.amount)
  };
  const onDateChange = (e: any) => {
    setUsers({...user, date: e});
    // console.log(user.amount)
  };
  const onCategoryChange = (e: any) => {
    setUsers({...user, category: e});
    // console.log(user.amount)
  };
  const onNameChange = (e: any) => {
    setUsers({...user, name: e});
    // console.log(user.amount)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addText}>Add Fund</Text>
      <View style={styles.subcontainer}>
        <TextInput
          value={user.amount}
          onChangeText={onAmountChange}
          placeholder="Amount"
          style={styles.input}
        />
        <TextInput
          value={user.name}
          onChangeText={onNameChange}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={user.date}
          onChangeText={onDateChange}
          placeholder="Date"
          style={styles.input}
        />
        <TextInput
          value={user.category}
          onChangeText={onCategoryChange}
          placeholder="Categoryx"
          style={styles.input}
        />
      </View>
      <View style={styles.bcontainer}>
        <TouchableOpacity style={styles.touchableButton} onPress={pressbutton}>
          <Text style={styles.button}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFund;
