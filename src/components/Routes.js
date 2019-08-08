import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { mainTheme } from '../MuiTheme';
//App Components 
import HomeDemo from './HomeDemo';
//Style theme
const theme = createMuiTheme(mainTheme);
/**
 * Create Routes
 */
function Routes(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <>
            <Switch>
              <Route path="/" component={HomeDemo} exact />
            </Switch>
          </>
        </BrowserRouter>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default Routes;
