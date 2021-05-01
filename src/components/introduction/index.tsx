import React from "react"
import {
    Wrapper,
    MainTextContainer,
    NameTextContainer,
    Hey,
    Name,
    Role,
} from "./styles"

const Introduction: React.FC = () => {
    return (
        <Wrapper>
            <MainTextContainer>
                <NameTextContainer>
                    <Hey>Hello World, I am</Hey>
                    <Name>Sooryakiran Ponnath </Name>
                </NameTextContainer>

                <Role>Fullstack Developer</Role>
            </MainTextContainer>
        </Wrapper>
    )
}

export default Introduction
