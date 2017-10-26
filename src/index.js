import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton');

  body {
    margin: 0;
  }
`;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
