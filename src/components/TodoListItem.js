import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import {toggleTodo, removeTodo} from '../actions'
import {Ionicons} from '@expo/vector-icons'

removeItemFRomList = (id) => {
    this.props.dispatch(removeTodo(id))
}

export default class TodoListItem extends Component {
    render() {
        return (
            <View style={ styles.viewContainer }>
                <TouchableOpacity 
                    onPress={()=> this.props.dispatch(toggleTodo(this.props.id))}
                    style={ styles.opacity }>

                    <View style = {styles.checkBoxIconStyle}>
                        <Ionicons name= {this.props.completed ? "md-checkbox" : "md-square-outline"} 
                        size={20} 
                        style = {{ color: this.props.completed ? "#3d8cd4" : "black" }} />
                    </View>

                    <Text style={{fontSize: 16,
                        color: this.props.completed == true ? 'darkgray' : 'black',
                        textDecorationLine: this.props.completed ? 'line-through' : 'none'}}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {()=> this.props.dispatch(removeTodo(this.props.id))}
                    style = {{alignItems: 'center', justifyContent: 'center'}}>
                    <View style = {styles.trashIconStyle}>
                        <Ionicons name = "md-trash" size={25} style = {{ color: "#A9A9A9" }} />
                    </View>
                </TouchableOpacity> 
                </View>
        );
    }
};

const styles = StyleSheet.create({
    viewContainer: {
        borderWidth: 1,
        borderColor:"#A9A9A9", 
        borderRadius: 5,
        marginHorizontal:10,
        flexDirection: 'row',
        margin:2
    },
    opacity: {
        padding: 15,
        flex: 1,
        flexDirection: 'row'
    },
    trashIconStyle: { 
        width:30, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    checkBoxIconStyle: { 
        width:25, 
        alignItems: 'flex-start', 
        justifyContent: 'center'  
    }
  });