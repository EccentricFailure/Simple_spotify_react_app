import React,{useEffect} from 'react';
import './navbar.scss';
import logo from '../logo.svg';
import { NavLink, Route, Switch } from "react-router-dom";

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 0 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>

        <div className="navigation">
            <ul>
              <li><NavLink to="/content">content</NavLink></li>
              <li><NavLink to="/content2">content2</NavLink></li>
            </ul>
        </div>

        <div className="logo">
          <img src={logo} alt="Logo" title="Logo" />
        </div>
    </header>
  )
};

export default Navbar;