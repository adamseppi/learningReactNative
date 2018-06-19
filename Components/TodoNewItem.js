import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class TodoNewItem extends React.Component {
    static navigationOptions = {
        title: 'Adam Seppi\'s Todo List Add Todo',
    }

    render () {
        return (
            <View style={styles.detailsBox}>
                <Text style={styles.detailsLabel}>Title Goes Here: </Text><TextInput placeholder="Enter New Item"></TextInput>
                <Text style={styles.detailsLabel}>Description Goes Here: </Text><TextInput placeholder="Enter New Item"></TextInput>
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

