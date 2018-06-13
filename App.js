import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TodoList from './Components/TodoList';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput style={{height: 40}} placeholder="Hello I'm here"></TextInput> */}
        <TodoList todos={staticTodos}></TodoList>
      </View>        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  }
});

const staticTodos = [
  {title: "Todo 1", desc: "Description"},
  {title: "Todo 2", desc: "Description"},
  {title: "Todo 3", desc: "Description"},
  {title: "Todo 4", desc: "Description"},
  {title: "Todo 5", desc: "Description"},
  {title: "Todo 6", desc: "Description"},
  {title: "Todo 7", desc: "Description"},
  {title: "Todo 8", desc: "Description"},
]
