import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import TodoArea from './TodoArea';
import { blue } from 'ansi-colors';

export default class TodoList extends React.Component {
    render () {
        return (
        <View style={styles.todoList}>
            <TextInput style={styles.todoFilter} placeholder="Filter Todo's by Name"></TextInput>
            <TodoArea todos={this.props.todos} style={styles.todoArea}></TodoArea>
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
        backgroundColor: '#eee'
    },
    todoArea: {
        flex: 1
    }
});

