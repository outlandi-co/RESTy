import React from 'react';
import PropTypes from 'prop-types';

class Results extends React.Component {
  render() {
    return (
      <section>
        <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
      </section>
    );
  }
}

Results.propTypes = {
  data: PropTypes.any, // Accept any type of data
};

export default Results;
