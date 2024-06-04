import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '', // Initialize url state
    };
  }

  // Function to handle URL input change
  handleUrlChange = e => {
    this.setState({ url: e.target.value });
  };

  // Function to handle form submission
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: 'GET', // Assuming the default method is GET
      url: this.state.url, // Use the dynamically captured URL
    };
    this.props.handleApiCall(formData);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>URL: </span>
            {/* Capture URL input dynamically */}
            <input name='url' type='text' value={this.state.url} onChange={this.handleUrlChange} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            {/* Include other HTTP methods if needed */}
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

// Define PropTypes
Form.propTypes = {
  handleApiCall: PropTypes.func.isRequired,
};

export default Form;
