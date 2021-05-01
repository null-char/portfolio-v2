import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "components/header"
import { ThemeProvider } from "styled-components"
import theme from "themes/main"
import { GlobalStyles, Wrapper } from "./styles"
import { Helmet } from "react-helmet"

type Props = {
    disableHeader?: boolean
    disableFooter?: boolean
}
// To make children required
type FCWithChildren<P = {}> = (
    props: {
        children: React.ReactNode
    } & P
) => React.ReactElement

const Layout: FCWithChildren<Props> = ({
    children,
    disableHeader,
    disableFooter,
}) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Wrapper>
                    {!disableHeader && <Header />}
                    <main>{children}</main>
                    {/* FOOTER HERE */}
                </Wrapper>
            </ThemeProvider>
        </>
    )
}

export default Layout
