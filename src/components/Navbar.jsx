import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const navStyles = {
  position: "sticky",
  backgroundColor: "#f5f5f5",
  top: "0",
  justifyContent: "space-between",
  zIndex: 10000
};

const Navbar = () => {
  return (
    <Stack alignItems="center" direction="row" p={2} sx={navStyles} >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} height={45} alt="logo" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;