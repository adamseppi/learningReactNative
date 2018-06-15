import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class TodoArea extends React.Component {
    static navigationOptions = {
        title: 'Adam Seppi\'s Todo List',
    }

    render () {
        const todo = this.props.navigation.getParam('todo', undefined);
        return (
            <View style={styles.detailsBox}>
                <Text style={styles.detailsLabel}>Title Goes Here: </Text><Text>{todo.title}</Text>
                <Text style={styles.detailsLabel}>Description Goes Here: </Text><Text>{todo.desc}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detailsBox: {
        flex: 1
    },
    detailsLabel: {
        fontWeight: 'bold'
    }
});

