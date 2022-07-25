import React from 'react';
import './CloudItem.scss'

const CloudItem = ({ img, desc, figure }) => {
  return (
    <div className="cloud__item">
      <img src={img} alt={img} />
      <h1>{figure} mph</h1>
      <h2>{desc}</h2>
    </div>
  )
}

export default CloudItem