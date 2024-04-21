import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../../assets/AcmeLogo";
import SwitchButton from "../Switch";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">FOLIE</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <SwitchButton />
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat" className="hidden lg:flex">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu className="sm:hidden">
        <NavbarMenuItem>
          <Link href="#">Features</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Customers</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Integrations</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Login</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
