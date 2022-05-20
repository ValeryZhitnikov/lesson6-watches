import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './TableRow.css';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTime: null
    }
  }

  componentDidMount() {
    this.getCurrentTime();
    this.interval = setInterval(this.getCurrentTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrentTime = () => {
    const { watch } = this.props;
    this.setState({
      currentTime: moment.utc().add(watch.zone, 'hours').format('HH:mm:ss')
    });
  }

  render() {
    const { watch, removeWatch } = this.props;

    return ( 
      <tr className="table-row">
        <td>{watch.name}</td>
        <td>{this.state.currentTime}</td>
        <td><button onClick={() => removeWatch(watch.id)} className="delete-button">x</button></td>
      </tr>
    )
  }
}


TableRow.propTypes = {
  watch: PropTypes.object.isRequired,
  removeWatch: PropTypes.func.isRequired
}

export default TableRow;