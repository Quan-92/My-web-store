import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
  {
    display: "Introduce",
    path: "/about"
  },
  {
    display: "Contact",
    path: "/about"
  },
  {
    display: "Recruit",
    path: "/about"
  },
  {
    display: "News",
    path: "/about"
  },
  {
    display: "Shop system",
    path: "/about"
  }
]

const footerCustomerLinks = [
  {
    display: "Refund Policy",
    path: "/about"
  },
  {
    display: "Warranty Policy",
    path: "/about"
  },
  {
    display: "Refund Policy",
    path: "/about"
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}>
          <div>
            <div className="footer__title">
              Support call center
            </div>
            <div className="footer__content">
              <p>
                Contact to order <strong>0869999999</strong>
              </p>

              <p>
                Ordering questions <strong>0869999999</strong>
              </p>

              <p>
                Advice, complaints <strong>0869999999</strong>
              </p>
            </div>
          </div>

          <div>
            <div className='footer__title'>
              About QT STORE
            </div>

            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>

          <div>
            <div className='footer__title'>
              Customer care
            </div>

            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Towards the goal of bringing
              a new joy of dressing every day to millions
              of Vietnamese consumers. Join QT STORE towards
              a more active and positive life.
            </p>
          </div>

        </Grid>
      </div>
    </footer>
  )
}

export default Footer
