import React, {PropTypes} from 'react';

export const NumberInput = (props) =>
 <div className="numberinput">
 <label htmlFor={'base_' + props.base}>{'Base ' + props.base}</label>
 <input type="text" id={'base_' + props.base} value={props.number} onChange={(event)=> props.changeFunction(event, props.base)}></input>
 </div>;

NumberInput.propTypes = {
  base: PropTypes.number.isRequired,
  number: PropTypes.string
};
