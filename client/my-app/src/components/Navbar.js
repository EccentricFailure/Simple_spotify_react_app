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
              <li className="logo" ><NavLink to="/" name="logo"><img src={logo} alt="Logo" title="Logo" /></NavLink></li>
              <li><NavLink to="/content">List of Songs</NavLink></li>
              <li><NavLink to="/content2">Genres</NavLink></li>
            </ul>
        </div>
    </header>
  )
};

export default Navbar;