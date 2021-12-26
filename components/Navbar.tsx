import type { NextPage } from "next";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Navbar: NextPage = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className="start">
        <li>
          <Link href="/">Home</Link> 
        </li>
        <li>
          <Link href="/shops">Shops</Link> 
        </li>
        <li>
          <Link href="/about">About</Link> 
        </li>
      </ul>
      
    <p className={navStyles.padding}></p>  
      
      {/* Towards the end of the navbar */}
      <ul className={navStyles.end}>
        <li>
          <Link href="/auth">Profile</Link> 
        </li>
        <li>
          <Link href="/auth">Sign In</Link> 
        </li>
        <li>
          <Link href="/auth">Sign Up</Link> 
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
