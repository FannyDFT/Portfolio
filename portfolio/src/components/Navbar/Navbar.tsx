"use client";

import React, { useState } from "react";
import "./_navbar.scss";
import Image from "next/image";
import logo from "../../../public/assets/images/icones/logo.png";
import open from "../../../public/assets/images/icones/open.png";
import close from "../../../public/assets/images/icones/close_menu.png";
import Link from "next/link";
import { myLinks } from "./link";

interface LinkItem {
  id: number;
  link: string;
  title: string;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [linkIsActive, setLinkIsActive] = useState<{ [key: number]: boolean }>(
    {},
  );

  const changeColorText = (linkId: number) => {
    setLinkIsActive((prev) => ({
      ...prev,
      [linkId]: !prev[linkId],
    }));
  };

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const scrollToContact = (): void => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      closeNavbar();
    }
  };

  return (
    <div className="navbar">
      <Link href="/" onClick={closeNavbar}>
        <Image src={logo} width={95} height={90} alt="logo" />
      </Link>
      <nav
        className={`navbar__links ${
          isOpen ? "navbar__links__navbar_active" : "navbar__links__navbar"
        }`}
      >
        {myLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => {
              closeNavbar();
              changeColorText(link.id);
            }}
            className={linkIsActive ? "navbar__links__isActive" : ""}
          >
            {link.title}
          </Link>
        ))}

        <Link
          href="/"
          className="navbar__links__btn"
          type="button"
          onClick={() => {
            scrollToContact();
            closeNavbar();
          }}
        >
          Contact
        </Link>
      </nav>
      <button type="button" className="navbar__buttons" onClick={showNavbar}>
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
