import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <FlatList
      style={styles.block}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          text={item.text}
          id={item.id}
          done={item.done}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      )}
      ItemSeparatorComponent={
        () => <View style={styles.separator} />
      }
      keyExtractor={todo => todo.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',

  }
})

export default TodoList;