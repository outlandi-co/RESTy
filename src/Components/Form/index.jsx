import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleMethodChange = (method) => setMethod(method);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      url,
      method,
      body: method === 'GET' ? null : body,
    };

    // Call handleApiCall with the form data
    await handleApiCall(formData);

    // Fetch JSON data if method is GET, POST, PUT, or DELETE
    if (method !== 'GET') {
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: method === 'GET' ? null : body
        });
        const responseData = await response.json();
        setBody(JSON.stringify(responseData, null, 2)); // Set JSON response data in the body textarea
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input name='url' type='text' value={url} onChange={handleUrlChange} />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <span id="get" onClick={() => handleMethodChange('GET')} className={method === 'GET' ? 'active' : ''}>GET</span>
        <span id="post" onClick={() => handleMethodChange('POST')} className={method === 'POST' ? 'active' : ''}>POST</span>
        <span id="put" onClick={() => handleMethodChange('PUT')} className={method === 'PUT' ? 'active' : ''}>PUT</span>
        <span id="delete" onClick={() => handleMethodChange('DELETE')} className={method === 'DELETE' ? 'active' : ''}>DELETE</span>
      </label>
      {(method !== 'GET') && (
        <label>
          <span>Response (JSON): </span>
          <textarea 
            name='body' 
            value={body} 
            onChange={handleBodyChange} 
            readOnly // Make the textarea read-only
          />
        </label>
      )}
    </form>
  );
};

Form.propTypes = {
  handleApiCall: PropTypes.func.isRequired,
};

export default Form;
