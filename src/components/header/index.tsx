import React from "react"
import { Wrapper, Nav, NavList, NavItem } from "./styles"

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Nav>
                <NavList>
                    <NavItem>Projects</NavItem>
                    <NavItem>About Me</NavItem>
                    <NavItem>Contact</NavItem>
                    <NavItem>Skills</NavItem>
                </NavList>
            </Nav>
        </Wrapper>
    )
}

export default Header
