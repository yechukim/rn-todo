import React, { useState } from 'react'
import { Keyboard, Platform, StyleSheet, Image, TextInput, TouchableOpacity, View } from 'react-native'

export default function AddToDo() {

  const [text, setText] = useState('')

  const onPress = () => {
    setText('')
    Keyboard.dismiss()
  }

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  )
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder='enter your to-do'
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType='done'
      />

      {
        Platform.select({
          ios:
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
              {button}
            </TouchableOpacity>,
          android:
            <View style={styles.circleWrapper} onPress={onPress}>
              <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                {button}
              </TouchableOpacity>
            </View>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 8
  },
  buttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24
  }
})