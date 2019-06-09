import React, { useState } from 'react';
import 'isomorphic-fetch';
import Tabs from '../components/Tabs/Tabs';
import DataTable from '../components/DataTable/DataTable';


class Index extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Tabs />
        <DataTable />
      </React.Fragment>
    );
  }
}


export default Index;