import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

TodosList.defaultProps = { todos: {} };
TodosList.propTypes = {
  todos: PropTypes.arrayOf([{
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }]),
};
export default TodosList;
