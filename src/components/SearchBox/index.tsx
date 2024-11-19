// SearchBox.js
import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '../../assets';

const SearchBox = () => {
  return (
    <View style={styles.searchpanel}>
      <TextInput placeholder="Search.." style={styles.searchbox} />
      <TouchableOpacity style={styles.touchablesearchimage}>
        <Image source={Icon.search} style={styles.searchimage} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchpanel: {flexDirection: 'row', alignItems: 'center'},
  touchablesearchimage: {
    position: 'absolute',
    left: '7%',
  },
  searchimage: {
    marginTop: 9,
    height: 20,
    width: 20,
  },
  searchbox: {
    padding: 15,
    paddingLeft: '10%',
    backgroundColor: 'white',
    marginHorizontal: '5%',
    borderRadius: 8,
    marginTop: 10,
    flex: 1,
  },
});
