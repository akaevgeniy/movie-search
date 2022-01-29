import { NavLink } from 'react-router-dom';
import React from 'react';
import './Menu.css';
function Menu({ header, items, active }) {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="menu__block">
        <h4 className="menu__header">{header}</h4>
        <ul className="menu__lists">
          {items.map((item) => (
            <NavLink className="menu__link" key={item.href} to={item.href}>
              {item.value}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Menu;
