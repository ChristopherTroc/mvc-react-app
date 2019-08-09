import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
//App Components
import HomeDemo from './HomeDemo';
/**
 * Create Routes
 */
function Routes(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/" component={HomeDemo} exact />
          </Switch>
        </>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default Routes;
