import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class TodoRow extends React.Component {
    render () {
        const todo = this.props.todo;

        return (
        <View style={styles.todoRow}>
            <TouchableOpacity style={styles.todoRow} onPress={() => this.props.navigation.navigate("DetailScreen", { todo: todo })}>
                <View style={styles.todoTitle}><Text>{todo.title}</Text></View>
                <View style={styles.todoX}><Button onPress={() => this.props.handleDeleteButton(todo)} title="X"></Button></View>
            </TouchableOpacity>
        </View>
        )
    }
}

export default withNavigation(TodoRow);

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

