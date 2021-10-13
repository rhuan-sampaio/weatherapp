import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <PersistGate persistor={persistor}>
        <Routes>
          <App />
        </Routes>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
