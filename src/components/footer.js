import React from 'react';

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <div className="inner-footer">
        <p>© {new Date().getFullYear()}, Built with {siteTitle}</p>
      </div>
    </footer>
  );
}

export default Footer;