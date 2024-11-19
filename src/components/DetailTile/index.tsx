import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';

const DetailTile = ({
  type,typeinfo
}: {
  type:any,typeinfo:any
}) => {
  return (
    <View style={{backgroundColor: 'black',alignItems:'center',paddingTop:20}}>
      <TouchableOpacity
        style={styles.container}
        >
          <Text style={styles.typesText}>Expenses on{type}</Text>
          <Text style={styles.typesText}>{typeinfo}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailTile;
