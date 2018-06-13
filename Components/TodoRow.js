import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoRow from './TodoRow';
import { yellow } from 'ansi-colors';

export default class TodoList extends React.Component {
    render () {
        const person = this.props.todo;

        return (
        <View style={styles.todoRow}>
            <View style={styles.todoTitle}><Text>{this.props.todo.title}</Text></View>
            <View style={styles.todoX}><Text>X</Text></View>
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
        marginBottom: 10,
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

