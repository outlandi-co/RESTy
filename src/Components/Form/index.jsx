import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e) => setUrl(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: url,
    };
    handleApiCall(formData);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input name='url' type='text' value={url} onChange={handleUrlChange} />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <span id="get">GET</span>
        <span id="post">POST</span>
        <span id="put">PUT</span>
        <span id="delete">DELETE</span>
      </label>
    </form>
  );
};

Form.propTypes = {
  handleApiCall: PropTypes.func.isRequired,
};

export default Form;
