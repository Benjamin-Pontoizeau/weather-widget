import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

function Form({ inputValue, handleChange, handleSubmit }) {
    return(
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Saisissez votre ville..."
          value={inputValue}
          onChange={handleChange}
        />
        {/* <select className='form-select'>
          <option>Fr</option>
          <option>En</option>
        </select> */}
      </form>
    );
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;