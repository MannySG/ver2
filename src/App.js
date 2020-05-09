import React from 'react';
import './assets/style/index.css';
import './assets/style/footer.css';
import './assets/style/workSituation.css';
import './assets/style/everyone.css';
import './assets/style/joinWaitList.css';
import './assets/style/taxpayment.css';

import 'antd/dist/antd.css';
import './api-config/ga-setup';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import GetATaxReFund from './components/GetATaxReFund';
import {Redirect} from 'react-router-dom';
import WaitList from './container/Waitlist';
function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/waitlist/" />
          <Route path="/waitlist/" component={WaitList} />
          <Route path="/privacypolicy/" component={PrivacyPolicy} />
          <Route path="/termsofservice/" component={TermsOfService} />
          <Route path="/getataxrefund/:id/" component={GetATaxReFund} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
