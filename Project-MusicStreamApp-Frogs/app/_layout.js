import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import GetStart from './sign_in/GetStart'
import SignIn from './sign_in/SignIn'

const _layout = () => {
  return (
    <SafeAreaView>
      <SignIn></SignIn>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})