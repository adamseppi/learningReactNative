import React from 'react';
import {StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';
import TodoArea from './TodoArea';
import { blue } from 'ansi-colors';

export default class TodoList extends React.Component {

    static navigationOptions = {
        title: 'Adam Seppi\'s Todo List',
    }

    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            todos: staticTodos
        }

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    handleTextInput(text) {
        this.setState({
            inputText: text
        })
    } 

    handleDeleteButton(todo) {
        var oldTodos = this.state.todos;
        console.log("Handling Delete Button | " + todo.title);
        oldTodos.splice(oldTodos.findIndex(this.matchesElement, todo), 1);
        this.setState({
            todos: oldTodos
        })
    }

    matchesElement(el) {
        console.log(el.title + " | " + this.title);
        console.log(el.title===this.title && el.description==this.description);
        return el.title===this.title && el.description==this.description;
    }

    render () {
        return (
        <View style={styles.todoList}>
            <TextInput style={styles.todoFilter} placeholder="Filter Todo's by Name" onChangeText={this.handleTextInput}></TextInput>
            <TodoArea todos={this.state.todos} style={styles.todoArea} inputText={this.state.inputText} handleDeleteButton={this.handleDeleteButton}></TodoArea>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    todoList: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column'
    },
    todoFilter: {
        height: 40,
        margin: 20,
        paddingLeft: 10,
        backgroundColor: '#eee',
        borderRadius: 5
    },
    todoArea: {
        flex: 1
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

