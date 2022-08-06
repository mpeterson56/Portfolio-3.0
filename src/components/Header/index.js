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
    <header  ><h1 className='App-header'>Michael Peterson <img className='img-thumbnail' alt='michael peterson' src='https://user-images.githubusercontent.com/100823810/183262193-2c6b62b1-ace0-435c-a5b2-ffe647650d44.jpeg'/></h1>
    <div >
     
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {renderPage()}
    </div>
</header>

  );
}

export default Header;