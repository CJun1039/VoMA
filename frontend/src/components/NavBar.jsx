import { React, useState } from 'react';
import giclogo from '../assets/giclogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [selectedEntry, setSelectedEntry] = useState('');

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const entries = [
    'Dashboard',
    'Positions',
    'Entities',
    'Analytics',
  ]

  return (
    <div className="nav-bar">
      <img src={giclogo} alt="Banner" style={{ width: '100px', padding: '20px 0px' }} />
      {entries.map((entry) => (
        <Link key={entry} to={(entry == "Dashboard" ? '/' : `/${entry.toLowerCase()}`)}>
          <div
            className={`nav-bar-entry ${selectedEntry === entry ? 'nav-bar-entry-selected' : ''}`}
            onClick={() => handleEntryClick(entry)}
          >
            <p className="nav-bar-entry-text">{entry}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavBar