
import PropTypes from "prop-types";
import React, { Component } from "react";
import { From, Label, Input, Button } from "./ContactFrom.styled";

class ContactFrom extends Component {
  state = {
  name: '',
  number: '',
  };

  changeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  submit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: ''});
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render () {
    const { name, number } = this.state;

    return (
      <From onSubmit = { this.submit }>
        <Label htmlFor = { this.nameId }>
          Name
          <Input
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={ name }
           onChange={ this.changeInput}
           placeholder=""
           />
        </Label>

        <Label htmlFor={ this.numberId }>
          Number
          <Input
           type="tel"
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
           value={ number }
           onChange={ this.changeInput }
           placeholder=""
           />
        </Label>

        <Button type="submit">Add contact</Button>
      </From>
    );
  }
}

export default ContactFrom;
