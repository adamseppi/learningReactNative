import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Button  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TodoList from './Components/TodoList';



class HelloWorldClass extends React.Component {
  static navigationOptions = {
    title: 'Hello World Secondary',
  }
  render() {
    return (
      <View>
        <Text>Hello World Home</Text>
        <Button onPress={() => this.props.navigation.navigate("homeScreen")} title="Press me for Home"/>
      </View>
    );
  }
}

class HelloWorldClass2 extends React.Component {
  static navigationOptions = {
    title: 'Hello World Home',
  }
  render() {
    return (
      <View>
        <Text>Hello World Home</Text>
        <Button onPress={() => this.props.navigation.navigate("viewScreen")} title="Press me for Secondary"/>
      </View>
    );
  }
}


const MainScreenNavigator = createStackNavigator({
  HomeScreen: { screen: TodoList},
  DetailScreen: { screen: HelloWorldClass}
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput style={{height: 40}} placeholder="Hello I'm here"></TextInput> */}
        <MainScreenNavigator style={{ width: Dimensions.get('window').width }}></MainScreenNavigator>
      </View>        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  }
});
