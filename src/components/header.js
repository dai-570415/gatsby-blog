import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog } from '@fortawesome/free-solid-svg-icons';

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
    <>
      <header>
        <div className="inner-header">
          <h4>
            <Image fluid={ data.icon.childImageSharp.fluid } className="logo-image" alt="" />
            {siteTitle}
          </h4>
          <div className="navi">
            <Link to="/"><FontAwesomeIcon icon={faHome} />HOME</Link>
            <Link to="/blogIndex/"><FontAwesomeIcon icon={faBlog} />BLOG</Link>
          </div>
        </div>
      </header>
      <style>{`
        header {
          background: rgba(255, 255, 255, .9);
          top: 0;
          left: 0;
          right: 0;
          position: fixed;
          z-index: 1000;
        }
        .inner-header {
          width: 85%;
          margin: 0 auto;
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .inner-header a {
          font-size: 15px;
          color: #333;
          margin: 0 0 0 40px;
        }
        .inner-header a:hover {
          color:#4b0082;
        }
        .inner-header .logo-image {
          display: inline-block;
          width: 25px;
          margin: 0 10px 0 0;
          top: 6px;
          position: relative;
        }
        .inner-header .navi svg {
          margin: 0 10px 0 0;
        }
      `}
      </style>
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
