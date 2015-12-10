'use strict';
import { createHistory, useBasename } from 'history';
import { Router } from 'react-router';
import { render } from 'react-dom';

let Home = require('./components/Home/Home.jsx');

const historyConfig = useBasename(createHistory)({
  basename: '/'
});

const routeConfig = [
  {
    path: '/',
    getComponents(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('./components/Wrap/Wrap'));
      });
    },
    getIndexRoute(location, cb) {
      require.ensure([], function (require) {
        cb(null, {
          getComponent(location, cb) {
            cb(null, require('./components/Home/Home'));
          }
        });
      });
    },
    getChildRoutes(location, cb) {
      require.ensure([], function(require) {
        cb(null, require('./routes/index'));
      });
    }
  }
];

render(
  <Router routes={routeConfig} history={historyConfig} />,
  document.getElementById('root')
);
