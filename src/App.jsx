import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios'; // Import axios for making HTTP requests

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      error: null, // Add error state to handle errors
    };
  }

  // Function to make API call
  callApi = async (requestParams) => {
    try {
      // Make HTTP request using axios
      const response = await axios.get(requestParams.url);
      // Update state with fetched data and request parameters
      this.setState({ data: response.data, requestParams, error: null });
    } catch (error) {
      // Handle errors by setting error state
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        {/* Pass data and error states as props to Results */}
        <Results data={this.state.data} error={this.state.error} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
