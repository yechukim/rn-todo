
import React from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddToDo from './components/AddToDo';

const App = () => {
  const today = new Date()
  return (

    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          <Empty />
          <AddToDo />

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
  avoid: {
    flex: 1

  }
})
export default App;