import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id:uuid(),
        text: action.payload.text
      }
//giving each todo a unique id
      return { todos: state.todos.concat(todo) };

      case 'DELETE_TODO':
        return {todos: state.todos.filter(todo => todo.id !== action.payload)}
        //if the todo that is clicked on with the delete to do action being run does not equal the action
        //payload(the data from that todo then include that in our new array)
    default:
      return state;
  }
}
