import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ openMenu, open }) => {
  return (
    <div className="nav_burger">
      <div className="burger__wrapper">
        <button className={open ? 'burger is-open' : 'burger'} onClick={openMenu}>
          <span className="burger__lines">
            <span className="burger__line line-a-1"></span>
            <span className="burger__line line-a-2"></span>
            <span className="burger__line line-b-1"></span>
            <span className="burger__line line-b-2"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

Burger.propTypes = {
  menuToggle: PropTypes.func,
  open: PropTypes.bool,
};

export default Burger;
