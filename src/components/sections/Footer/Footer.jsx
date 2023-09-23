import React from 'react';
import './index.scss';
import emailImg from '../../../assets/images/email.svg'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer container">
        <div className="footer-text">
            <h2>САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
            <h4>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ</h4>
        </div>
        <button className="footer-btn">
            <img src={emailImg} alt="Email" />
            ваш запрос
        </button>
      </div>
    </footer>
  )
}

export default Footer
