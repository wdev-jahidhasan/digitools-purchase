import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerImg from "../assets/footerImg.png"
import { DiVim } from 'react-icons/di';

const Footer = () => {
  return (
    <div className='bg-black text-white p-10'>
      <footer className="footer md:footer-horizontal">
        <div>
          <img src={footerImg} alt="" />
          <p className='text-gray-400'>Premium digital tools for creators, professionals,<br /> and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <nav>
          <h6 className="footer-title">Products</h6>
          <a className="link link-hover text-gray-400">Features</a>
          <a className="link link-hover text-gray-400">Pricing</a>
          <a className="link link-hover text-gray-400">Templates</a>
          <a className="link link-hover text-gray-400">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-gray-400">About</a>
          <a className="link link-hover text-gray-400">Blog</a>
          <a className="link link-hover text-gray-400">Career</a>
          <a className="link link-hover text-gray-400">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover text-gray-400">Documentation</a>
          <a className="link link-hover text-gray-400">Help Center</a>
          <a className="link link-hover text-gray-400">Community</a>
          <a className="link link-hover text-gray-400">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className='bg-white p-1 rounded-full text-lg text-black'>
              <FaInstagram />
            </a>
            <a className='bg-white p-1 rounded-full text-lg text-black'>
              <FaFacebookF />
            </a>
            <a className='bg-white p-1 rounded-full text-lg text-black'>
              <FaXTwitter />
            </a>
          </div>
        </nav>
      </footer>

      <hr className='my-8 border text-gray-700' />

      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <p className='text-gray-400'>© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className='flex gap-4 text-gray-400'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;