import React from 'react';
import './ColumnHeader.scss';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function ColumnHeader({ handleClick, title, sortable, alignment="left" }) {
  const [sort, setSort] = React.useState(true);
  
  return (
    <React.Fragment>
      <div className={"data-table__col-header " + alignment} onClick={() => {setSort(!sort); handleClick()}}>
        <span className="col-header__title">{title}&nbsp;&nbsp;</span>
        {
          sortable.toLowerCase() === title.toLowerCase() ?
            <React.Fragment>
              <FaChevronUp className={'col-header__icon ' + (sort ? '' : 'active')} />
              <FaChevronDown className={'col-header__icon ' + (sort ? 'active' : '')} />
            </React.Fragment>
            : null
        }
      </div>
    </React.Fragment>
  );
  
}