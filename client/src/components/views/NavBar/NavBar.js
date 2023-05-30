import React from 'react';
import LogoImg from './img/logo.png';

function NavBar() {

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', height: '100px', background: '#A3D6CC', display:'flex', justifyContent: 'center' }}>
      <div className="menu__logo">
        <a href='/main'>
          <img src={LogoImg} alt='logo' style={{ width: '87px', height: '27px', marginTop: '50px'}} />
        </a>
      </div>
    </nav>
  )
}

export default NavBar