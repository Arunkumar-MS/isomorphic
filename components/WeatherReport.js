import React from 'react';
export default class WeatherReport extends React.Component {
  render() {
    
 return (
           <span> Current temperature in {this.props.city} is : {this.props.body.main.temp} &#8451; <a href='http://localhost:5000/'> &lt; &lt; Go Back </a> </span>
        );
  }


}

