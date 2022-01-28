import { NavLink } from 'react-router-dom';
import React from 'react';
import './Menu.css';
function Menu({ header, items, active }) {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <h4 className="menu__header">{header}</h4>
      <ul className="menu__lists">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink to={item.href}>{item.value}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
