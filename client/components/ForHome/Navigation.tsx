import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { Input } from "../../styled__components/common";
import { Badge, Hamburger, HomeBox, Nav } from "../../styled__components/home";
import Logo from "../Logo/Logo";

const Navigation = () => {
  const [showNav, setShowNav] = useState<boolean>(true);
  const handleHamburger = () => {
    console.log(showNav);
    setShowNav(!showNav);
  };
  return (
    <Nav showNav={showNav}>
      <div>
        <Input placeholder="Search user..." />

        <Logo />
        <div>
          <span style={{ position: "relative", cursor: "pointer" }}>
            <BsFillBellFill style={{ fontSize: "20px", color: "#474545" }} />
            <Badge>0</Badge>
          </span>
          <span>
            <Image
              src="/avatar.jpg"
              alt="userhere"
              height={30}
              width={30}
              style={{ borderRadius: "50%" }}
            />
            {/* <sub>
              <AiOutlineDown />
            </sub> */}
          </span>
        </div>
      </div>
      <Hamburger onClick={handleHamburger}>☰</Hamburger>
    </Nav>
  );
};

export default Navigation;
