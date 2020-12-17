import React from 'react';

export const CheckBox = (props) => (
    <li>
      <input key={props.id} type='checkbox' checked={props.isChecked} name={props.firebaseKey} value={props.firebaseKey} /> {props.year} {props.brand} {props.model}
    </li>
);

export default CheckBox;
