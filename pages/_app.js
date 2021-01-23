// Next.js uses the (this)App component to initialize pages. 
// You can override it to control what your pages will receive as props during initialization.
// You can do so using getInitialProps method in your pages. Lets create _app.js inside pages 
// folder so that we can override the default App component of next js. We are doing this to be
// able to pass props(properties) from redux store to other pages. This way pages will be able to 
// access redux store as props.

import React, { useEffect } from 'react';
import { withUserAgent } from 'next-useragent';
import { Provider } from 'react-redux';
import store from '../src/store';
import ReduxToastr from 'react-redux-toastr';
import '../styles/globals.scss';

function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <>
      {
        <Provider store={store} >
          <Component {...pageProps} />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
        </Provider>
      }
    </>
  );
}


export default withUserAgent(MyApp);

// NOTE:
// We are not creating store here as it prevent us for static redering...
// Instead of creating Store here we are creating Store in Layout file... /src/hoc/staticLayout | authLayout | appLayout.
