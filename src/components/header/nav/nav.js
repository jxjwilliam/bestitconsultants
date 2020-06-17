import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/technology">Technology</Link>
      </li>
      <li>
        <Link to="/resource">Resource</Link>
      </li>
      <li>
        <a href="https://github.com/jxjwilliam">Repository</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
