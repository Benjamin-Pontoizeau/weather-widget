import React from 'react';

function Form() {
    return(
        <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Saisissez votre ville..."
        value={inputValue}
        onChange={handleChange}
      />
      <button className="form__button" type="submit">Envoyer</button>
    </form>
    );
}

export default Form;