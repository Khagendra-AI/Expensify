import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Banner from '../../components/Banner';
import { styles } from './styles';
import { Icon, Images } from '../../assets';
import { useSelector } from 'react-redux';
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const Home = () => {

  const {totalExpenses,totalFunds,travel,food} = useSelector((state: any) => {
   // console.log(state.mainapi)
    return state.mainapi;
  });
        const balance= totalFunds-totalExpenses
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.applogo} style={styles.logo} />
        <SearchBox />
      </View>
      <View style={styles.banners}>
        <Banner heading={"Total FUNDS"} imagename={Icon.funds} info={totalFunds} color={'green'}/>
        <View style={styles.partitionView}/>
        <Banner heading={"Total EXPENSES"} imagename={Icon.expense} info={totalExpenses} color={'red'}/>
      </View>
      <View style={styles.walletView}>
      <Text style={styles.walletText}>
        Wallet Balance:
      </Text>
      <Text style={styles.balanceText}>
        {balance}
      </Text>
      </View>
    </View>
  );
};

export default Home;
