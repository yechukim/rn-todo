import React from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function DateHead({ date }) {

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const { top } = useSafeAreaInsets()
  const formatted = `${year}. ${month}. ${day}`

  return (
    <>
      <View style={{ backgroundColor: '#000', height: top }} />
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {formatted}
        </Text>
      </View>


    </>
  )
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#000',
    padding: 16,
  }
  ,
  dateText: {
    fontSize: 24,
    color: '#fff'
  }
})
