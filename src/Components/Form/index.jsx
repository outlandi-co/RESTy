import React, { useState } from 'react';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall({ url, method });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL:</span>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="https://jsonplaceholder.typicode.com/posts/1"
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <label>
        <span>Method:</span>
        <select name="method" value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      <button type="submit">Go</button>
    </form>
  );
};

export default Form;
