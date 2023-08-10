import React from 'react';

const Nav = () => {
  return (
    <header className="header">
      <div className="header-content">
        <p> Wine About It</p>
        <ul className='header-links'></ul>
        <li className="User icon"><a href="/usericon"> UserIcon </a> </li>
        <li className="Cart"><a href="/cart"> Cart</a></li>
        <li className='Search bar'><a href='/search'>Search</a></li>


      </div>
    </header>




  )
}


export default Nav;
