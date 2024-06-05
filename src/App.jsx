// src/App.jsx
import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [error, setError] = useState(null);

  const callApi = async (requestParams) => {
    try {
      const response = await axios.get(requestParams.url);
      setData(response.data);
      setRequestParams(requestParams);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} error={error} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
