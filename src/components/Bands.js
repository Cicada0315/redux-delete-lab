import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    const bands=this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand}/>)
    return(
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;