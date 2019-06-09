import { Row } from '../Grid/Grid';
import React from 'react';
import './Tabs.scss';


export default function Tabs(props) {
  const [active, setActive] = React.useState('active');
  const [active2, setActive2] = React.useState('');
  return (
    <div className="tabs">
      <Row>
        <div onClick={()=> {setActive('active'); setActive2('')}}  className={"tab__item " + active}>New Transactions</div>
        <div onClick={()=> {setActive(''); setActive2('active')}} className={"tab__item " + active2}>Reviewed Transactions</div>
      </Row>
    </div>
  );
}
