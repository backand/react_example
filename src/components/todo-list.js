import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getItems, postItem} from 'actions/todo';

export class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <div>
            ADD TODO: <input name="todo-input" ref="todo"/>
            <div>
              <button onClick={ this.props.getItems }
                      className="btn btn-success">Get Items
              </button>
              <button onClick={ this.postItem.bind(this) }
                      className="btn btn-warning">Post Item
              </button>
            </div>
            <br/>
            <label>Result:</label>
            <ul className="list-group">
              { this.renderTodos() }
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderTodos() {
    return this.props.todos
      .map((todo) => (<li key={ todo.id }
                          className="list-group-item">
        { todo.description }
      </li>)
      );
  }

  postItem() {
    const todo = this.refs.todo;

    this.props.postItem(todo.value);
    todo.value = '';
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps, { getItems, postItem })(TodoList);
