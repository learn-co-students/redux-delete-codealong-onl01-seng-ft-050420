import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} delete={this.props.delete} text={todo.text} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({
      type: "DELETE_TODO", 
      payload: todoText
    })
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
