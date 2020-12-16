import React from 'react';

export const CheckBox = (props) => (
    <li>
      <input key={props.id} onClick={props.handleCheckChildElement} type='checkbox' checked={props.isChecked} value={props.value} /> {props.year} {props.brand} {props.model}
    </li>
);

export default CheckBox;
