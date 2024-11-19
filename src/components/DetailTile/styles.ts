import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT=Dimensions.get('screen').height
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container: {
    margin:5,
    padding : 9,
    height: SCREEN_HEIGHT*.3,
    width: SCREEN_WIDTH*.6,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: '#1e1e1f',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:'10%',
  },
  typesText:{
    
    color:'white',
    fontSize:21,
  },
  
});
export default styles