import './SearchBar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';

const SearchBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <InputGroup style={{ flexDirection: "row", justifyContent: "center", width: "50%",alignItems: "center"}}>
        <Input placeholder="Search..." />
        <InputGroupAddon addonType="append"><Button color="primary" type="submit"><FontAwesomeIcon icon="search"/></Button></InputGroupAddon>
    </InputGroup>
  );
}


export default SearchBar;