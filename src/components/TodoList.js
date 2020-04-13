import React, { Component } from 'react';
import { FlatList, View,Text} from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer';


export default class TodoList extends Component {    
    render() {        
        return (
        <View style = {{alignItems:'stretch', flex:1}}>
            <View style = {{margin: 0, height:60, backgroundColor:"#3d8cd4", alignItems: 'center', justifyContent:'center'}}>
            <Text style = {{color: "white",justifyContent: 'center',fontSize:20, fontWeight:'bold'}}> ToDo </Text>
        </View>
        <FlatList style = {{marginTop: 20, marginBottom: 10}}
            data={this.props.todos}            
            renderItem={({ item, index }) => {
                return (                    
                    <TaskItemContainer {...item}>
                    </TaskItemContainer>
                );
            }}            
            keyExtractor={(item, index) => String(item.id)}
        >
        </FlatList>
        </View>
        );
    }
};
