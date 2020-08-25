import React from 'react';

const Footer = ({ siteTitle }) => {
  return (
    <>
      <footer>
        <div className="inner-footer">
          <p>© {new Date().getFullYear()}, Built with {siteTitle}</p>
        </div>
      </footer>
      <style>{`
        .inner-footer {
          padding: 100px 0 20px;
        }
        .inner-footer p {
          text-align: center;
          font-size: 12px;
        }
      `}
      </style>
    </>
  );
}

export default Footer;