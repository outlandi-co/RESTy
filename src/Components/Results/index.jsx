import React from 'react';
import ReactJson from 'react-json-view';

const Results = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Results:</h2>
      {data.data && <ReactJson src={data.data} />}
      <h2>Headers:</h2>
      {data.headers && <ReactJson src={data.headers} />}
    </div>
  );
};

export default Results;
