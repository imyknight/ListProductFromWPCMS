import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ listPage }) => (
  <header>
    <Link to="/"><div className="item">Home</div></Link>
    {listPage.map(page => <Link to={`/${page.node.slug}`} key={page.node.id}> <div className="item">{page.node.title}</div></Link>)}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
