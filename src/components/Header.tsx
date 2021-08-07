import React, { FC } from 'react';

const Header: FC<{}> = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-primary app_header">
    <div className="container">
      <a href="/" className="navbar-brand">MyAnimeList</a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className="position-relative">
          <input type="search" className="form-control app_search_input" placeholder="search" />
          <ul className="list-group app_search_list">
            <li className="list-group-item">asdasdj</li>
            <li className="list-group-item">asdasdj</li>
            <li className="list-group-item">asdasdj</li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
);

export default Header;
