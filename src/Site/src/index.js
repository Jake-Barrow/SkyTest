import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// You can choose your kind of history here (e.g. browserHistory)

import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
