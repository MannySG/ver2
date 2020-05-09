import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import VerifyCode from '../components/VerifyCode';
import ShareLink from '../components/ShareLink';
import UsedSignUp from '../components/UsedSignUp';
import Home from '../views/Home';
import {Redirect} from 'react-router-dom';

function WaitList () {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect
          exact
          from="/waitlist/share-link/*"
          to="/waitlist/share-link"
        />
        ;

        <Route path="/waitlist/verify-code" component={VerifyCode} />
        <Redirect
          exact
          from="/waitlist/verify-code/*"
          to="/waitlist/verify-code"
        />
        ;

        <Route
          path="/waitlist/share-link"
          render={props => <ShareLink {...props} hidden={true} />}
        />

        <Route path="/waitlist/used-signup" component={UsedSignUp} />
        <Redirect exact from="/waitlist/*" to="/waitlist" />
        <Route exact path="/waitlist" component={Home} />

      </Switch>
    </BrowserRouter>
  );
}

export default WaitList;
