// src/Components/Results/index.jsx

import PropTypes from 'prop-types';

const Results = ({ data, error }) => (
  <section>
    {error ? (
      <pre>{error}</pre>
    ) : (
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    )}
  </section>
);

Results.propTypes = {
  data: PropTypes.any,
  error: PropTypes.string,
};

export default Results;
