import React from 'react';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';

const loginAlert = () => {
  new Noty({
    type: 'information',
    theme: 'mint',
    layout: 'center',
    text: 'Please login to view project',
    timeout: 2000
  }).show();
  return <div></div>;
};

export default loginAlert;
