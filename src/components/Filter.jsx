
import PropTypes from "prop-types";
import React from "react";
import { Label, Input } from "./Filter.styled";


const Filter =({ filter,onChange }) => {
  const handleFilterChange = (e) => onChange (e.target.value)
  return (
    <Label>
      Find contacts by name
      <Input
      type="text"
      name="filter"
      value={ filter }
      onChange={ handleFilterChange } />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
