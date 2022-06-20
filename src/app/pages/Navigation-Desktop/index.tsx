import * as React from 'react';
import './navigationDesktop.scss';

export function NavigationDesktop() {
  const [active, setActive] = React.useState('Home');

  return (
    <>
      <div className={'nav-container'}></div>
    </>
  );
}
