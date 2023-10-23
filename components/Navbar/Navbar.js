import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = (props) => {
  //   return <div>This is SPARTAAAAAAAA....</div>;
  return (
    <nav className={styles.navBar}>
      <Link class="active" href="/">
        Home
      </Link>
      <Link href="#news">News</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#about">About</Link>
    </nav>
  );
};

export default Navbar;
