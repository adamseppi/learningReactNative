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
  {title: "Abc Todo 1", desc: "Description"},
  {title: "Def Todo 2", desc: "Description"},
  {title: "Ghi Todo 3", desc: "Description"},
  {title: "Jkl Todo 4", desc: "Description"},
  {title: "Mno Todo 5", desc: "Description"},
  {title: "Pqr Todo 6", desc: "Description"},
  {title: "Stu Todo 7", desc: "Description"},
  {title: "Vwx Todo 8", desc: "Description"},
  {title: "Abc Todo 9", desc: "Description"},
  {title: "Def Todo 10", desc: "Description"},
  {title: "Ghi Todo 11", desc: "Description"},
  {title: "Jkl Todo 12", desc: "Description"},
  {title: "Mno Todo 13", desc: "Description"},
  {title: "Pqr Todo 14", desc: "Description"},
  {title: "Stu Todo 15", desc: "Description"},
  {title: "Vwx Todo 16", desc: "Description"},
]
