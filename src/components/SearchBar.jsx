import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from "@mui/icons-material";

const paperStyles = {
  borderRadius: 20,
  border: "2px solid #3d56fc",
  pl: 2,
  boxShadow: "none",
  mr: { sm: 5 }
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = e => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onSubmitHandler}
      sx={paperStyles}
    >
      <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); }} />
      <IconButton type="submit" sx={{ color: "#3d56fc", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;