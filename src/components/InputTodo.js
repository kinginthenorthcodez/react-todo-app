import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const { addTodoProps } = props;

  const onChangeTitle = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText('');
    } else {
      console.log('Please enter item!');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          name="title"
          className="input-text"
          value={inputText.title}
          onChange={onChangeTitle}
        />
        <button type="submit" className="input-submit">
          submit
          <FaPlusCircle style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }} />
        </button>
      </form>
      <p>
        todo:
        {inputText.title}
      </p>
    </>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
