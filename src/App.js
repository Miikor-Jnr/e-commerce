import React from "react"
import './App.css';
import Navbar from './navbar';
import Search from './search';
import Section1 from './section1'
import Section2 from "./section2";
import Section3 from "./section3";
import Sidenav from './sidenav';

function App() {

  const [showNav, setShowNav] = React.useState(false)

function hideSideNav(){
  if (showNav) setShowNav(false)
}

function toggleNavBar(){
  setShowNav(prevState => !prevState)
}

  return (
    <div className="App">
        {showNav && <div className="black-back"  onClick={hideSideNav}></div>}
      <header className='header' >
        <Navbar setShowNav={toggleNavBar}/>
        <Search />
      </header>
      <Sidenav setShowNav={toggleNavBar} isShow={showNav} />
      <main className="main">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>

     
    </div>
  );
}

export default App;
