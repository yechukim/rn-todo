import React from 'react';

import { Alert, StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function TodoItem({ done, text, onRemove, onToggle, id }) {

  const askRemove = () => { // 여기 param에 id 넣는 거 아님 .. 오류 남 
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {
          text: '취소', onPress: () => { }, style: 'cancel',
        },
        {
          text: '삭제', onPress: () => {
            onRemove(id)
            console.log(id)
          }, style: 'destructive',
        }
      ],
      {
        cancelable: true,

      }
    )
  }
  return (
    <View style={styles.item}>

      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {
            done && (
              <Image source={require('../assets/icons/check_white/check_white.png')} />
            )
          }
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {
        done ? (
          <TouchableOpacity
            onPress={askRemove} >
            <Icon name='delete-forever' size={32} color='red' />
          </TouchableOpacity>
        ) : (
          <View style={styles.removePlaceholder} />
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomColor: '#e0e0e0'
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#333',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  filled: {
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through'
  },
  removePlaceholder: {
    width: 32,
    height: 32
  }
})

export default TodoItem;