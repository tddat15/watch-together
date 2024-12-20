import React from 'react';
import './style.css'

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({href, children}) => {
  return (
    <a href={href} className="link" > {children} </a>
  )
}

export default Link;
