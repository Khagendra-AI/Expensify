import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  upperbanner:{
    // borderWidth:2,
    marginTop :20,
    // height : '20%',
   height:'40%',
 
    // backgroundColor:'green'
  },
  item: {
    
    flexDirection:'row',
    //  height: '10%',
    //  flex:1,
      // width: '90%',
      backgroundColor: '#1e1e1f',
      padding: 20,
      marginVertical: 18,
      borderRadius: 10,
     
    },
    image: {
       
      width: 60,
      height: 60,
      borderRadius: 25,
      marginRight: 15, 
      
    },
    infoView:{
      alignItems:'center',
      width:'80%',
   // backgroundColor:'green'

    },
    totalText:{
      marginVertical:10,
      color:'white',
      fontSize:19,

      },
      infotext:{
        // borderWidth:1,
        // borderColor:'white',
        color:'white',
        fontSize:19,
      },
})
export default styles