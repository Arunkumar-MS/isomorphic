import request from 'request';

export  function getWeatherReport(req, res) {
  var Header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  request.get({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+req.query.city+'&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric',
      headers: Header
    },
    function (error, response, body) {
      
 return res.render('Report.js', {
      pageTitle: req.query.city+' Weather',
      props: 
      {
      body: JSON.parse(body),
      city:req.query.city,
      response: response 
  	  }
	    });   
	});
}



