import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  container: {
   // backgroundColor: 'red',
   alignItems:'center',
    flex: 1,
    paddingTop: 50,
    backgroundColor:'black',
    paddingHorizontal:20,
    // alignItems: 'center',
    // paddingHorizontal: 10,
  },
  header: {
    width: SCREEN_WIDTH,
   // backgroundColor: 'grey',
   // flex: 0.3,
  },
  partitionView:{
    height:'50%',
  },
  banners:{
    // justifyContent:'space-between',
    // marginVertical:10,
    // borderWidth : 2,
    flexDirection : 'column',
    flex:.5,
    // backgroundColor:'red',
  },
  logo: {
    borderRadius: 5,
    marginHorizontal: '5%',
    backgroundColor: 'yellow',
    resizeMode: 'contain',
    width: SCREEN_WIDTH * 0.4,
    height: 30,
  },
  walletView:{
    padding:20,
    borderRadius:14,
    backgroundColor:'#1e1e1f',
    marginTop:'50%',
    width:'105%',
  },
  walletText:{
    
    color:'white',
    alignSelf:'center',
    fontSize:25
  },
  balanceText:{
    alignSelf:'center',
    fontSize:30,
    color:'white',
   
  },
});