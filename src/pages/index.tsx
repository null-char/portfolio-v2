import React from "react"

import Layout from "components/layout"
import Seo from "components/seo"
import Introduction from "components/introduction"

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Introduction />
    </Layout>
)

export default IndexPage
