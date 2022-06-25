import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18nextConf";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <Suspense fallback="...">
        <React.StrictMode>
        <App />
        </React.StrictMode>
    </Suspense>

, document.getElementById("root"));
// serviceWorkerRegistration.register();
if (navigator.serviceWorker.controller) {
    console.log('Service worker already registered.')
  } else {
    navigator.serviceWorker.register('service-worker.js', {
      scope: './'
    }).then(function(reg) {
      console.log('Service worker has been registered for scope:'+ reg.scope);
    });
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
