import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import TodoRow from './TodoRow';

export default class TodoList extends React.Component {
    render () {

        const todoRows = [];


        this.props.todos.forEach(todo => {
            if(todo.title.includes(this.props.inputText)) {
                todoRows.push((
                    todo
                ));
            }
        });
        return (
        <FlatList data={todoRows}
                  renderItem={({item}) => (<TodoRow todo={item} inputText={this.props.inputText} handleDeleteButton={this.props.handleDeleteButton}></TodoRow>)}
                  keyExtractor={(item, index) => item.title}
                  filter
                  style={styles.todoListBox}>
        </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    todoListBox: {
        flex: 1
    }
});

