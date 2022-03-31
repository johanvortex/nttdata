import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from './store';
import App from './routes/App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let persistor = persistStore(store);
//persistor.purge();
ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App /> 
      
  </PersistGate>
</Provider>,
  document.getElementById('root')
);
reportWebVitals();
