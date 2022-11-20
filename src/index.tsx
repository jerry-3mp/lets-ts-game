import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GettingStarted from './routes/GettingStarted';
import LoadingModels from './routes/LoadingModels';
import BasicWorld from './routes/BasicWorld';
import FPVMovement from './routes/FPVMovement';
import TPVMovement from './routes/TPVMovement';
import CharacterController from './routes/CharacterController';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="loading-models" element={<LoadingModels />} />
          <Route path="basic-world" element={<BasicWorld />} />
          <Route path="fpv-movement" element={<FPVMovement />} />
          <Route path="tpv-movement" element={<TPVMovement />} />
          <Route path="character-controller" element={<CharacterController />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
