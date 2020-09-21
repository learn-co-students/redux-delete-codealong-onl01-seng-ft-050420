import React from 'react'

const Todo = props => {
    //debugger
    //props.todo.text is coming from mapStateToProps where it is returning the props as attributes of a tod
    //in this case the only attribute a todo has besides an id is text
return (
<div>
    <span>{props.todo.text}</span><button onClick={() =>
   props.delete(props.todo.id)}>DELETE</button>
</div>
//providing function able to be deleting things
//now we are modifying the todo component to use props.todo.id on click
//but only providing id as payload to delete things
)
}
export default Todo;

// <li>{props.text}</li>
