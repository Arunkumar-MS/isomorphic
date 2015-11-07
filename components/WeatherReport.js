import React from 'react';
export default class WeatherReport extends React.Component {
  render() {
    
 return (
         <div className="report-main">
           <span className="report">Current temperature in 
           <p>{this.props.city}</p>
           <p> {this.props.body.main.temp} &#8451; <img src={"http://openweathermap.org/img/w/" +this.props.body.weather[0].icon+".png"}></img> 
           </p>
           </span>
           <a href='http://localhost:5000/'> &lt; &lt; Go Back </a> 
 		</div>
        );
  }


}

