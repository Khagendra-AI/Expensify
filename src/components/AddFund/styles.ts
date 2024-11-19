import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    //flex: 1,
    backgroundColor: 'black',
  },
  addText: {fontSize:21,
    marginVertical:20,
    alignSelf:'center',
    color: 'white',
  },
  subcontainer: {
    alignItems:'center'
  },
  input: {
    width: '80%',
    padding: 12,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },
  bcontainer:{
    alignSelf:'center',
    marginVertical:'7%',
  },
  button:{
    color:'gold'
  },
  touchableButton:{
    padding:10,
    borderRadius:5,
    //with:'20%',
    backgroundColor:'#1e1e1f'
  },
});
export default styles;
