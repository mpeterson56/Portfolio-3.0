import React, { useState } from 'react';
import Nav from '../../components/Nav';
import Work from '../../components/Work';
import About from '../../components/About';
import Resume from '../../components/Resume';
import Contact from '../../components/Contact';

function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

 const renderPage = () => {
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header><h1>Michael Peterson</h1>
    <div>
     
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {renderPage()}
    </div>
</header>

  );
}

export default Header;