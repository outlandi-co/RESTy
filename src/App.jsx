import React, { useReducer } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

const initialState = {
  data: null,
  requestParams: {},
  error: null,
  history: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
        error: null,
        history: [...state.history, { ...state.requestParams, data: action.payload }]
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_REQUEST_PARAMS':
      return { ...state, requestParams: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams) => {
    dispatch({ type: 'SET_REQUEST_PARAMS', payload: requestParams });
    try {
      console.log('Requesting:', requestParams); // Debugging statement
      const response = await axios({
        method: requestParams.method,
        url: requestParams.url,
      });

      console.log('Response:', response); // Debugging statement

      if (response.headers['content-type'].includes('application/json')) {
        dispatch({ type: 'SET_DATA', payload: { data: response.data, headers: response.headers } });
      } else {
        throw new Error('Response is not JSON');
      }
    } catch (error) {
      console.error('Error fetching data:', error); // Debugging statement
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {state.error && <div className="error">{state.error}</div>}
      <Results data={state.data} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
