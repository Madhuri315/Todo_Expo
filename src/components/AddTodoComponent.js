import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'

class AddTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 20}}>
                <TextInput
                onChangeText={(text)=>this.setState({text})}
                value={this.state.text}
                placeholder = "Add a New Todo"
                style = {styles.textInputStyle} />

                <TouchableOpacity onPress= {(event) => {
                        if (!this.state.text.trim()) {
                            return;
                        }
                        this.props.onClickAdd(this.state.text)
                        this.setState({text: ''})}}>

                    <View style = {styles.addIconStyle}>
                     <Ionicons name = "md-add" size={30} style = {{ color: "white" }} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodoComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addIconStyle: {
        height: 50, 
        width: 50, 
        borderWidth: 2,
        borderTopRightRadius:5, 
        borderBottomRightRadius : 5,
        borderColor: "#3d8cd4", 
        backgroundColor: "#3d8cd4", 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    textInputStyle: { 
        borderWidth: 1,
        borderColor: "#3d8cd4", 
        backgroundColor: "#ffffff",
        borderTopLeftRadius:5, 
        borderBottomLeftRadius : 5,
        height: 50,
        flex: 1, 
        padding: 15 
    }
});