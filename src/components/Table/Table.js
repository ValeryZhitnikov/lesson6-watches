import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

function Table(props) {
  const { watchesList } = props;

  return ( 
    <table className="recordings-table">
      <tbody>
        {watchesList}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  watchesList: PropTypes.array.isRequired
}

export default Table;