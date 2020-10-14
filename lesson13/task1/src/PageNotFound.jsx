import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page_content">
      <h1>404😇</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default PageNotFound;