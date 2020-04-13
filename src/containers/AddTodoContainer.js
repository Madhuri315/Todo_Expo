import {connect} from 'react-redux'
import AddTodoComponent from '../components/AddTodoComponent'
import {toggleTodo, addTodo} from '../actions'

const mapStateToProps = state => ({
    text: ''
})

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (text) => {                        
            dispatch(addTodo(text));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoComponent)