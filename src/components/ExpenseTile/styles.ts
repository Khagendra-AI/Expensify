import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    width:SCREEN_WIDTH*.9,
    flexDirection:'row',
    backgroundColor:'#1e1e1f',
    justifyContent:'space-between',
    padding:20,
    paddingHorizontal:'12%',
    borderRadius:10,
    marginVertical:10,

  },
  leftView: {
    alignItems:'center'
  }, 
  rightView:{
    alignItems:'center',
  },
  nameText:{
    color:'white',
    fontSize:21,
  },
  amountText:{
    color:'white',
    fontSize:21,
  },
  categoryText:{
    color:'grey',
    fontSize:12,
  },
  dateText:{
    color:'grey',
    fontSize:12,
  },
})
export default styles