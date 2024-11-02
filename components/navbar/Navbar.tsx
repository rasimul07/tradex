import React from "react";
import Logo from "./Logo";
import UserIcon from "./UserIcon";
import Container from "../global/Container";
import LinksDropdown from "./LinksDropdown";


function Navbar() {
  return (
    <nav className="">
      <Container className="mx-auto max-w-6xl lg:mx-w-7xl flex justify-between py-8">
        <Logo />
        <LinksDropdown/>
      </Container>
    </nav>
  );
}

export default Navbar;
