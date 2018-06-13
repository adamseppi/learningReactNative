import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoRow from './TodoRow';
import { yellow } from 'ansi-colors';

export default class TodoList extends React.Component {
    render () {
        const person = this.props.todo;

        return (
        <View style={styles.todoRow}>
            <View style={styles.todoTitle}><Text>{person.title}</Text></View>
            <View style={styles.todoX}><Text>X</Text></View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    todoRow: { 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoTitle: {
        flex: 4,
        height: 30,
        backgroundColor: 'green'
    },
    todoX: {
        flex:1,
        height: 30,
        backgroundColor: 'yellow'
    }
});

