import React from 'react';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>&copy; 2022 PHANOX&trade; All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer