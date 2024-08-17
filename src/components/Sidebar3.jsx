import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import MailIcon from "@mui/icons-material/Mail";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const PageWrapper = styled.section`
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

const SidebarWrapper = styled.aside`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: ${({ $isOpen }) => ($isOpen ? "220px" : "64px")};
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  transition: width 0.45s;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    bottom: auto;
    width: 100%;
    height: ${({ $isOpen }) => ($isOpen ? "100%" : "60px")};
    border-radius: 0;
    transition: height 0.45s;
  }
`;

const SidebarInner = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 8px;

  @media (max-width: 768px) {
    height: 60px;
    justify-content: space-between;
  }
`;

const BurgerButton = styled.button`
  width: 30px;
  height: 72px;
  display: grid;
  place-items: center;
  background: none;
  border: none;
  color: #f9f9f9;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 60px;
  }
`;

const Logo = styled.img`
  height: 22px;
  margin-left: 8px;

  @media (max-width: 768px) {
    height: 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  gap: 4px;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 0 4px;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }
`;

const NavButton = styled.button`
  display: flex;
  gap: 14px;
  align-items: center;
  height: 50px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-transform: capitalize;
  line-height: 1;
  padding: 0 14px;
  border-radius: ${({ $isOpen }) => ($isOpen ? "10px" : "25px")};
  opacity: 0.7;
  color: #f9f9f9;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s, background 0.3s, border-radius 0.45s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
   
    opacity: 1;
  }

  span {
    display: ${({ $isOpen }) => ($isOpen ? "inline" : "none")};
  }

  @media (max-width: 768px) {
    height: 44px;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 10px;
    
    span {
      display: inline;
    }
  }
`;

const BottomNav = styled.div`
  margin-top: auto;
  padding: 8px;
`;

const navItems = [
  { label: "Home", icon: HomeIcon },
  { label: "Build", icon: BuildIcon },
  { label: "Cloud", icon: CloudIcon },
  { label: "Mail", icon: MailIcon }
];

const bottomNavItems = [
  { label: "Settings", icon: SettingsIcon },
  { label: "Help", icon: HelpIcon },
  { label: "Sign Out", icon: ExitToAppIcon }
];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <SidebarWrapper $isOpen={isOpen}>
          <SidebarInner>
            <SidebarHeader>
              <BurgerButton onClick={toggleSidebar}>
                {isOpen ? <CloseIcon fontSize={isMobile ? "medium" : "large"} /> : <MenuIcon fontSize={isMobile ? "medium" : "large"} />}
              </BurgerButton>
              <Logo src={logo} alt="logo" />
            </SidebarHeader>
            <Nav $isOpen={isOpen}>
              {navItems.map((item) => (
                <NavButton key={item.label} $isOpen={isOpen || isMobile}>
                  <item.icon fontSize={isMobile ? "small" : "medium"} />
                  <span>{item.label}</span>
                </NavButton>
              ))}
            </Nav>
            <BottomNav>
              {bottomNavItems.map((item) => (
                <NavButton key={item.label} $isOpen={isOpen || isMobile}>
                  <item.icon fontSize={isMobile ? "small" : "medium"} />
                  <span>{item.label}</span>
                </NavButton>
              ))}
            </BottomNav>
          </SidebarInner>
        </SidebarWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Sidebar3;