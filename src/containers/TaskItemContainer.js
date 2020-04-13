import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoListItem from '../components/TodoListItem';

const TaskItemContainer = connect()(TodoListItem);
export default TaskItemContainer;