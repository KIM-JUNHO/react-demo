import React from 'react';
import MainHeader from '../components/MainHeader';

function Main() {
  return (
    <>
      <MainHeader />
      <div>hr seperater</div>
      <ul>
        <li>li 1 (h2 image, p, a)</li>
        <li>li 2 (h2 image, p, a)</li>
        <li>li 3 (h2 image, p, a)</li>
        <li>li 4 (h2 image, p, a)</li>
        <li>li 5 (h2 image, p, a)</li>
      </ul>
      <div>hr seperater</div>
      <div>aside (textblock p)</div>
      <div>
        footer (sm)
        <div>h1, p</div>
        seperater email seperater ul, li5
      </div>
    </>
  );
}

export default Main;
