import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import GetStart from './sign_in/GetStart'
import SignIn from './sign_in/SignIn'
import SignUp from './sign_in/SignUp'
import SignInStep1 from './sign_in/SignInStep1'

const _layout = () => {
  return (
    <SafeAreaView>
      <SignInStep1></SignInStep1>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})