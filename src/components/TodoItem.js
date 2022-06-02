import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo } = this.props;
    return (<li id={todo.id}>{todo.title}</li>);
  }
}

TodoItem.defaultProps = { todo: {} };
TodoItem.propTypes = {
  todo: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
};
export default TodoItem;
