import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import routes from '../../common/routes';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import Button from '../Button';

/* const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: routes.SIGN_IN,
  authenticatedSelector: state => {
    console.log(state.user.token === "", "EL TOKEN ES");
    return state.user.token !== "";
  },
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
}) */

const App = () =>
  <BrowserRouter>
    <div className="app">
      {/* <NavBar></NavBar> */}
      <div className="content">
        {/* <Route exact path={routes.LANDING} component={userIsAuthenticated(HomeApp)} />
        <Route exact path={routes.HOME} component={userIsAuthenticated(HomeApp)} />
        <Route exact path={routes.NOTE} component={NoteApp} />
        <Route exact path={routes.SIGN_IN} component={LoginApp} />
        <Route exact path={routes.SIGN_UP} component={SignUpApp} /> */}
      </div>
    </div>
  </BrowserRouter>
export default App;