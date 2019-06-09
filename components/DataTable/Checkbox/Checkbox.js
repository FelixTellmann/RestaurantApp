import React from 'react';
import './Checkbox.scss';

export default function Checkbox({ checked }) {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <span onClick={() => isChecked === 'checked' ? setIsChecked('') : setIsChecked('checked')}
          className={'data-table__checkbox ' + isChecked} />
  );
  
}