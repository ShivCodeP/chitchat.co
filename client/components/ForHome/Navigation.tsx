import Image from "next/image";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { Input } from "../../styled__components/common";
import { Badge, HomeBox, Nav } from "../../styled__components/home";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <HomeBox>
      <Nav>
        <Input placeholder="Search user..." />

        <div>
          <Logo />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
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
            <sub>
              <AiOutlineDown />
            </sub>
          </span>
        </div>
      </Nav>
    </HomeBox>
  );
};

export default Navigation;
