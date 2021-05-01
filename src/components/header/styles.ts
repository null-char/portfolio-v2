import styled from "styled-components"

export const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    text-transform: uppercase;
`

export const Nav = styled.nav`
    padding: 3rem 9.5rem;
`

export const NavList = styled.ul`
    margin: 0;
    height: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    column-gap: 5rem;
    justify-content: end;
    font-family: inherit;
    color: inherit;
`

export const NavItem = styled.li`
    margin: 0;
    font-size: 2.3rem;
    font-weight: 400;
    cursor: pointer;
    transition-property: transform, color;
    transition: 0.2s ease-in-out;

    :hover {
        transform: translate(-2px, -1px);
        color: ${props => props.theme.colors.main};
    }
`
