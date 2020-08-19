import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo } from '@fortawesome/free-solid-svg-icons';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: {eq: "gatsby-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header>
      <div className="inner-header">
        <h4>
          <Image fluid={ data.icon.childImageSharp.fluid } className="logo-image" alt="" />
          {siteTitle}
        </h4>
        <div className="navi">
          <Link to="/"><FontAwesomeIcon icon={faHome} />HOME</Link>
          <Link to="/about/"><FontAwesomeIcon icon={faInfo} />ABOUT</Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
