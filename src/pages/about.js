import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout>
      <SEO title="Quick Start" description="aboutページです" />
      <h1 className="catch">Quick Start</h1>
      <div className="explanation">
        <p className="code">$ npm install -g gatsby-cli</p>
        <p className="code">$ gatsby new</p>
        <p className="code">$ cd [name]</p>
        <p className="code">$ gatsby develop</p>
        <p className="code">http://localhost:8000</p>
      </div>
    </Layout>
  );
}

export default About
