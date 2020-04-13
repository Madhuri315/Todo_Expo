import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList)