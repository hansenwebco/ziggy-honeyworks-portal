
import React from 'react';

const PageHeader = ({ title, subtitle, className }) => {
  return (
    <div className={`page-header ${className || ''}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
