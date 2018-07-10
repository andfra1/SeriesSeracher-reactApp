import React, {Component} from 'react';
import Serieslist from '../Serieslist';

class Series extends Component {

  state = {
    series: []
  }

  onSeriesInputChange = e => {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then(json => this.setState({series: json}));
      console.log(this.state.series);
  }

  render() {
    return (
      <div>
      <div>
      number of series: {this.state.series.length}
      <input type="text" onChange={this.onSeriesInputChange} />
      </div>
      <Serieslist list={this.state.series}/>
      </div>
    );
  }
}

export default Series;