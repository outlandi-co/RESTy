import React from 'react';
import ReactJson from 'react-json-view';

const Results = ({ data }) => {
  const isJsonObject = (data) => {
    return data && typeof data === 'object' && !Array.isArray(data);
  };

  return (
    <div>
      <h2>Results:</h2>
      {isJsonObject(data?.data) ? (
        <ReactJson src={data.data} />
      ) : (
        <div>No valid JSON data available</div>
      )}
      <h2>Headers:</h2>
      {isJsonObject(data?.headers) ? (
        <ReactJson src={data.headers} />
      ) : (
        <div>No valid JSON headers available</div>
      )}
    </div>
  );
};

export default Results;
