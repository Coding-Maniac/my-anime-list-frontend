import React, { FC } from 'react';

const NavbarSearch:FC<{}> = () => (
  <>
    <input type="search" className="form-control app_search_input" placeholder="search" />
    <NavbarSearch />
  </>
);

export default NavbarSearch;
