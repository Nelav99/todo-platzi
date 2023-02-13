import React, { useContext } from "react";
import './TodoSearch.css';
import { Box, Container, Input } from "@mui/material";
import { TodoContext } from "../Context/TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <Container className="TodoSearchContainer">
        <Box className="InputSearchContainer">
          <i className="gg-search" />
          <Input className="InputSearch" onChange={() => onSearchValueChange} placeholder="Search..." value={searchValue} aria-label="Demo input"/>
        </Box>
      </Container>
    </>
  );
}

export { TodoSearch };