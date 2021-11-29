import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Empty() {

  const emptyText = 'nothing to do ?'
  return (
    <View style={styles.block}>
      <Text style={styles.desc}>{emptyText}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    fontSize: 24,
    color: '#ccc'

  }
})
