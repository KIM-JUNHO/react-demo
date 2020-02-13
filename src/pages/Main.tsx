import React from 'react';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import MainFooter from '../components/MainFooter';
import MainTobbar from '../components/MainTobbar';

function Main() {
  return (
    <>
      <MainTobbar />
      <MainHeader />
      <hr />
      <MainContent />
      <hr />
      <MainFooter />
    </>
  );
}

export default Main;
