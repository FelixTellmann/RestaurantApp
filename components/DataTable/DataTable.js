import React from 'react';
import './DataTable.scss';
import Checkbox from './Checkbox/Checkbox';
import ColumnHeader from './ColumnHeader/ColumnHeader';


export default function DataTable(props) {
  const [sortBy, setSortBy] = React.useState("Date");
  return (
    <React.Fragment>
      <div className="data-table__spacer" />
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: '2.7%' }}><Checkbox checked="checked" /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Date")} title="Date" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Payee")} title="Payee" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Description")} title="Description" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Type")} title="Type" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Selection")} title="Selection" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Reference")} title="Reference" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("VAT")} title="VAT" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Spent")} title="Spent" sortable={sortBy} alignment="right" /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Received")} title="Received" sortable={sortBy} alignment="right"/></th>
            <th><ColumnHeader handleClick={()=> setSortBy("REC?")} title="REC?" sortable={sortBy} /></th>
            <th><ColumnHeader handleClick={()=> setSortBy("Action")} title="Action" sortable={sortBy} alignment="center"/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Checkbox</td>
            <td>date</td>
            <td>Payee</td>
            <td>Description</td>
            <td>Type</td>
            <td>Selection</td>
            <td>Reference</td>
            <td>VAT</td>
            <td>Spent</td>
            <td>Received</td>
            <td>REC?</td>
            <td>Action</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
