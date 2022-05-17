import React from 'react';

const Section = ({ padding, margin, children }) => {
  return <div style={{ padding, margin }}>{children}</div>;
};

export default Section;
