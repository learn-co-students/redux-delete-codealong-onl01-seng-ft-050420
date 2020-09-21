import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  }
  //updating our todos container
  //renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
//this.props.todos is coming from our action at the bottom, gives access for each todo component to 
//access our delete todo's action
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})
  }
}
//here we are making a method that will take in the argument of dispatch which will be a function
//to return a delete to do action which will let the action be executed anytime dispatch is called
//flow is mapDispatchToProps => dispatch => action
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
//this gives the todoscontainer access to this.props.delete because delete was the key 