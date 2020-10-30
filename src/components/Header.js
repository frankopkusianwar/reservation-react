import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="Header">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default Header;
