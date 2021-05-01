import React from "react"
import Layout from "components/layout"
import Seo from "components/seo"
import { Link, graphql, PageProps } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 5rem;
    justify-items: center;
    padding-top: 4rem;
    text-align: center;
    color: ${props => props.theme.colors.text};
    font-size: 2rem;

    a {
        color: ${props => props.theme.colors.main};
    }

    h1 {
        font-size: 10rem;

        span {
            color: ${props => props.theme.colors.main};
        }
    }
`

const TextContainer = styled.main`
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 2rem;
`

const LostImg = styled.img`
    height: 50rem;
`

type DataProps = {
    file: {
        publicURL: string
    }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({
    data: {
        file: { publicURL: lostSVG },
    },
}) => (
    <Layout disableHeader disableFooter>
        <Seo title="404: Not found" />

        <Wrapper>
            <LostImg src={lostSVG} alt="lost" />

            <TextContainer>
                <h1>
                    <span>404</span>: Not Found
                </h1>
                <p>
                    Seems like you're a little lost. Click{" "}
                    <Link to="/">here</Link> to go back home.
                </p>
            </TextContainer>
        </Wrapper>
    </Layout>
)

export const query = graphql`
    {
        file(relativePath: { eq: "lost.svg" }) {
            publicURL
        }
    }
`

export default NotFoundPage
