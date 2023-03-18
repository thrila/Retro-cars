import React from 'react'

const Footer = () => {
    const d = new Date();
d.setFullYear();
  return (
    <div className='text-center p-5'>
        <span>All rights reserved | 2023 <a href="https://github.com/thrila/" target='_blank' rel="noreferrer noopener">Thrila©</a></span>
    </div>
  )
}

export default Footer