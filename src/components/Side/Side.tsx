import React from 'react';
import SideHeader from './SideHeader';
import SideBody from './SideBody';
import SideFooter from './SideFooter';
import './Side.css';

function Side() {
  return (
    <header className="Side">
      <SideHeader />
      <SideBody />
      <SideFooter />
    </header>
  );
}

export default Side;
