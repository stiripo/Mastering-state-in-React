import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { visibilityReducer } from './redux/visibility';
import { subscriptionReducer } from './redux/subscription';
import { profilesReducer } from './redux/community';
import { inputReducer } from './redux/email_input';
import { disableReducer } from './redux/disable_button';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const allReducers = combineReducers(
  {
    communitySectionVisibility: visibilityReducer,
    statusSubscribed: subscriptionReducer,
    profiles: profilesReducer,
    subscribeEmail: inputReducer,
    disabled: disableReducer,
  }
);

const store = configureStore({ reducer: allReducers });

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
