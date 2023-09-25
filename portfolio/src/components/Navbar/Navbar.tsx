"use client";

import React, { useState } from "react";
import "./_navbar.scss";
import Image from "next/image";
import logo from "../../../public/assets/images/icones/logo.png";
import open from "../../../public/assets/images/icones/open.png";
import close from "../../../public/assets/images/icones/close_menu.png";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Link href="/">
        <Image src={logo} width={95} height={90} alt="logo" />
      </Link>
      <nav
        className={`header__links ${
          isOpen ? "header__links__navbar_active" : "header__links__navbar"
        }`}
      >
        <Link href="/">Accueil</Link>
        <Link href="/about">à Propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/">Contact</Link>
      </nav>
      <button type="button" className="header__buttons" onClick={showNavbar}>
        {isOpen ? (
          <Image src={close} width={53} height={53} alt="close_menu" />
        ) : (
          <Image src={open} width={53} height={53} alt="open_menu" />
        )}
      </button>
    </div>
  );
}

export default Navbar;
