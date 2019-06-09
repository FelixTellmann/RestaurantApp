import React from 'react';
import Error from 'next/error';


const E404 = () => {
  return <Error statusCode={404} />;
};

export default E404;