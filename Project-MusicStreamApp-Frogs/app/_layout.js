import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import GetStart from './sign_in/GetStart'
import SignIn from './sign_in/SignIn'
import SignUp from './sign_in/SignUp'

const _layout = () => {
  return (
    <SafeAreaView>
      <SignUp></SignUp>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})