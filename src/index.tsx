// Copyright (c) 2024 The Jaeger Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import configureStore from './utils/configure-store';

import 'antd/dist/reset.css';
import './index.css';

/**
 * Application entry point.
 * Initializes the Redux store, wraps the app in a Provider and BrowserRouter,
 * and mounts the React application to the DOM.
 */
const store = configureStore();

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container element not found. Ensure index.html has a <div id="root">.');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
