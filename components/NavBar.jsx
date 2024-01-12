import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar className="navbarcss" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <Image src={logo} className="logo" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CineFlix
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          <i className="fa-regular fa-bell"></i>
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          <i className="fa-solid fa-cart-shopping"></i>
        </NavbarLink>
        <NavbarLink href="#">
          <i className="fa-solid fa-circle-user"></i>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavBar;
