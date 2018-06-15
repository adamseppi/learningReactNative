import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import TodoRow from './TodoRow';
import { yellow } from 'ansi-colors';

export default class TodoList extends React.Component {
    render () {
        const todo = this.props.todo;

        return (
        <View style={styles.todoRow}>
            <TouchableOpacity style={styles.todoRow} >
                <View style={styles.todoTitle}><Text>{todo.title}</Text></View>
                <View style={styles.todoX}><Button onPress={() => this.props.handleDeleteButton(todo)} title="X"></Button></View>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    todoRow: { 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        margin: 10,
        borderRadius: 10,
        height: 100
    },
    todoTitle: {
        flex: 4,
    },
    todoX: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

