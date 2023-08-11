
import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled";

const Filter =({ filter,onchange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={ filter } onchange={ onchange } />
    </Label>
  );
};

Filter.prototypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
