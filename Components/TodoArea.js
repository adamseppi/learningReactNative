import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoRow from './TodoRow';

export default class TodoList extends React.Component {
    render () {

        const todoRows = [];

        this.props.todos.forEach(todo => {
            console.log("todo: " + todo.title);
            todoRows.push((
                <TodoRow style={{backgroundColor: 'red'}} todo={todo} key={todo.title}></TodoRow>
            ));
        });

        return (
        <View style={styles.todoListBox}>
            {todoRows}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    todoListBox: {
        justifyContent: 'space-around',
        flex: 1
    }
});

