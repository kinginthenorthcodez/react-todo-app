import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChangeTitle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    let message = '';
    if (title.trim()) {
      e.preventDefault();
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      message = 'Please enter item!';
    }
    return message;
  }

  render() {
    const { title } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Add Todo..."
            name="title"
            className="input-text"
            value={title}
            onChange={this.onChangeTitle}
          />
          <button type="submit" className="input-submit">submit</button>
        </form>
        <p>
          todo:
          {title}
        </p>
      </>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
