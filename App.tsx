import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigator'
import BottomNav from './src/navigator/RootNavigation'
import ExpenseTile from './src/components/ExpenseTile'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'


const App = () => {
  return (
    <Provider store={store}>
 
  <BottomNav/>
  
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})