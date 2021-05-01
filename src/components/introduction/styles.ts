import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
`

export const MainTextContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1rem;
    align-items: flex-start;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
    margin-bottom: 10rem;
`

export const NameTextContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, min-content);
`

const SpacedStyles = css`
    letter-spacing: 10px;
`

export const Hey = styled.span`
    ${SpacedStyles}
    font-size: 2.6rem;
    opacity: 0.8;
    display: inline-block;
    margin-left: 0.7rem;
`

export const Name = styled.p`
    font-size: 10rem;
    font-weight: 700;
    color: ${props => props.theme.colors.main};
`

export const Role = styled.p`
    ${SpacedStyles}
    font-size: 5rem;
    font-weight: 700;
`
