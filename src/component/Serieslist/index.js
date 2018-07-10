import React from 'react';

const SerieslistItem = ({series}) => (
  <li>
    <div>
    <h2>{series.show.name}</h2>
    <p>{series.show.summary}</p>
    </div>
  </li>
)

const Serieslist = (props) => {
  return (
    <div>
      <ul>
      {props.list.map(series => (
        <SerieslistItem series={series} key={series.show.id}/>
      ))}
      </ul>
    </div>
  );
}

export default Serieslist;