import React, { ReactElement } from 'react';
import './App.css';
import './assets/App.scss';

export default function App():ReactElement {
  return (
    <div className="row">
      <div className="col-md-6">
        <p>Anime</p>
      </div>
      <div className="col-md-6 ">
        <p>List</p>
      </div>
    </div>
  );
}
