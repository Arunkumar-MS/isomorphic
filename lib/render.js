import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App'

export default function(page, props) {
 return new Promise((resolve, reject) => {
   

    try {
      return resolve(ReactDOMServer.renderToString(
        <App
        {...props}
          Page={page} />
      ));
    } catch (e) {
      reject(e);
    }
});
}
