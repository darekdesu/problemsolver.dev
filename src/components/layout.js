import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import DarkModeToggle from "./darkModeToggle"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            dev_to
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <DarkModeToggle />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <a href={`https://twitter.com/${social.twitter}`}>twitter</a>
        {` · `}
        <a href={`https://github.com/${social.github}`}>github</a>
        {` · `}
        <a href={`https://dev.to/${social.dev_to}`}>dev.to</a>
      </footer>
    </div>
  )
}

export default Layout
