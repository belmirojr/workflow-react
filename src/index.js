import React from 'react'; // React <3
import ReactDOM from 'react-dom'; // Faz o render dos componentes do React
import Root from './components/Root'; // Componente Root
import registerServiceWorker from './registerServiceWorker'; // Service Worker PWA ftw!

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
