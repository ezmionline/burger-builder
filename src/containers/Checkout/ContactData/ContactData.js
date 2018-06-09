import React from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    }
  }
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact details</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="your name" />
          <input className={classes.Input} type="email" name="email" placeholder="your email" />
          <input className={classes.Input} type="text" name="street" placeholder="your street" />
          <input className={classes.Input} type="text" name="postCode" placeholder="your postcode" />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
