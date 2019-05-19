import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import routes from '../../common/routes';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import HomeApp from '../Views/home';
import BookApp from '../Views/book';
import StartApp from '../Views/start';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import SignUp from '../SignUp/index.jsx';

import styles from './app.module.css';

import coneverXML from 'xml-js';
import proxify from 'proxify-url';

/* const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: routes.SIGN_IN,
  authenticatedSelector: state => {
    console.log(state.user.token === "", "EL TOKEN ES");
    return state.user.token !== "";
  },
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
}) */


const App = () => {

return (
  <BrowserRouter>
    <div className={styles.app}>
      
      <Header/>
      {/* <SignUp/> */}
      <div className={styles.content}>
        <Route exact path={'/'} component={StartApp} />
        <Route exact path={routes.HOME} component={HomeApp} />
        <Route path={routes.BOOK} component={BookApp} />
        {/*<Route exact path={routes.LANDING} component={userIsAuthenticated(HomeApp)} />
        <Route exact path={routes.HOME} component={HomeApp} />
        <Route path={routes.BOOK} component={BookApp} />
        <Route exact path={routes.HOME} component={userIsAuthenticated(HomeApp)} />
        <Route exact path={routes.NOTE} component={NoteApp} />
        <Route exact path={routes.SIGN_IN} component={LoginApp} />
        <Route exact path={routes.SIGN_UP} component={SignUpApp} /> */}
        <Footer/>
      </div>
      
      
    </div>
  </BrowserRouter>
)}
export default App;