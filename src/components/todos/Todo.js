import React from 'react'

const Todo = props => <li>{props.text}<button onClick={ () => props.delete(props.todo.id)} > X </button></li> 

export default Todo;
