import ReactGA from 'react-ga';
import ID_GA from './configGA';

function initializeReactGA () {
  ReactGA.initialize (ID_GA, {
    alwaysSendToDefaultTracker: false,
  });
}

initializeReactGA ();
