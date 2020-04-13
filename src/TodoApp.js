import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native';

import TodoListContainer from './containers/TodoListContainer'
import AddTodoContainer from './containers/AddTodoContainer'

class TodoApp extends Component {
    state = {
        todos:[]
    }
    render() {
        return (
            <View style = {styles.container}>
                <StatusBar barStyle= "light-content"/>
                <TodoListContainer/>
                <AddTodoContainer/>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column'
    }
});

