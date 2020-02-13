import React from 'react';
import SideHeader from './SideHeader';
import SideBody from './SideBody';
import SideFooter from './SideFooter';

function Side() {
  return (
    <div className="SideContainer">
      <SideHeader />
      <SideBody />
      <SideFooter />
    </div>
  );
}

export default Side;
