import React from 'react';
import {StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';
import TodoArea from './TodoArea';
import { blue } from 'ansi-colors';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        }

        this.handleTextInput = this.handleTextInput.bind(this);
    }

    handleTextInput(text) {
        this.setState({
            inputText: text
        })
    }

    render () {
        return (
        <View style={styles.todoList}>
            <TextInput style={styles.todoFilter} placeholder="Filter Todo's by Name" onChangeText={this.handleTextInput}></TextInput>
            <TodoArea todos={this.props.todos} style={styles.todoArea} inputText={this.state.inputText}></TodoArea>
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

