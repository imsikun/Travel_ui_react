import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer () {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe any time.
        </p>
        <div className='input-areas'>
          <form action='#'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Testimonials</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Careers</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Testimonials</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Testimonials</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Careers</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Testimonials</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Products</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Links</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='socia-media'>
        <div className='social-media-wrap'>
          <div to='/' className='footer-logo'>
            <Link className='social-logo'>TRVL</Link>
          </div>
          <div className='social-icons'>
            <Link
              to='/'
              target='_blank'
              aria-label='facebook'
              className='social-icon-link Facebook'
            >
              <i className='fab fa-facebook'></i>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='instagram'
              className='social-icon-link instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='twitter'
              className='social-icon-link twitter'
            >
              <i className='fab fa-twitter'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
