import React, { useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = Styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  align-items: center;
  background-color:burlywood;
`;

const NavIcon = Styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
 
`;

const SidebarNav = Styled.nav`
  background: burlywood;
  width: 250px;
  color:black;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: left 0.3s ease;
  z-index: 10;
`;
const SidebarWrap = Styled.div`
  width: 100%;

 
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "burlyood" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1 style={{ textAlign: "center", marginLeft: "1rem", color: "black" }}>
            Algorithms
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
