import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Button  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TodoList from './Components/TodoList';
import TodoDetails from './Components/TodoDetails';


const MainScreenNavigator = createStackNavigator({
  HomeScreen: { screen: TodoList},
  DetailScreen: { screen: TodoDetails}
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator style={{ width: Dimensions.get('window').width }}></MainScreenNavigator>
      </View>        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
