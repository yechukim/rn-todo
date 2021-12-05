
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddToDo from './components/AddToDo';
import todoStorage from './storage/todoStorage';
import TodoList from './components/TodoList';

const App = () => {

  const todoRef = useRef(null)
  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: false },
    { id: 2, text: '리액트 네이티브 책 기초 공부', done: false },
    { id: 3, text: '투두 리스트 만들기', done: false },
  ])

  useEffect(() => {
    todoStorage
      .get()
      .then(setTodos)
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (todos === todoRef.current) return
    todoStorage
      .set(todos).catch(err => console.error(err))
  }, [todos])

  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1

    const newTodo = {
      id: nextId,
      text,
      done: false
    }
    // [] 안넣어서 또 제대로 안들어감
    // 제대로 넣자 
    setTodos([...todos, newTodo])
  }

  const onToggle = (id) => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo)
    setTodos(nextTodos)
  }

  const onRemove = (id) => {
    // console.log(id)
    const nextTodos = todos.filter(todo => todo.id !== id)
    setTodos(nextTodos)
  }
  const today = new Date()
  return (

    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={styles.avoidingView} >
          <DateHead date={today} />
          {todos.length === 0
            ? <Empty />
            : <TodoList
              todos={todos}
              onRemove={onRemove}
              onToggle={onToggle} />}
          <AddToDo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff'
  },
  avoidingView: {
    flex: 1

  }
})
export default App;