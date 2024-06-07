import React from 'react';
import PropTypes from 'prop-types';
import './History.scss';

const History = ({ history, onHistoryClick }) => {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} onClick={() => onHistoryClick(item)}>
            {item.method} - {item.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired,
  onHistoryClick: PropTypes.func.isRequired,
};

export default History;
