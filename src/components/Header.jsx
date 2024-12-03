import React, { useState } from 'react';
import './Header.css';
import down from '../assets/down.svg';
import display from '../assets/Display.svg';

const Header = ({ onGroupChange, onSortChange }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <div className="dropdown">
        {/* Dropdown Toggle Button */}
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <img src={display} alt="Services Icon" className="dropdown-icon" />
          <span className='display'>Display</span> <img src={down} alt="Services Icon" className="dropdown-icon" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="dropdown-menu">
            <li>
              <div className='selection'>
                <span>Grouping </span>
                <select onChange=
                  {(e) => {
                    onGroupChange(e.target.value);
                    // closeDropdown();
                  }
                  }
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </li>
            <li>

              <div className='selection'>
                <span>Ordering </span>
                <select onChange={(e) => onSortChange(e.target.value)}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div >
  );
};

export default Header;
