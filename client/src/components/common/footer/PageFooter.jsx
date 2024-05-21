import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const PageFooter = () => {
    return (
      <Footer className='bg-teal-100'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className='font-bold text-medium text-gray-600 hover:text-blue-800'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>About</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Careers</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Brand Center</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className='font-bold text-medium text-gray-600 hover:text-blue-800'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Discord Server</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Twitter</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Facebook</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className='font-bold text-medium text-gray-600 hover:text-blue-800'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Privacy Policy</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Licensing</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className='font-bold text-medium text-gray-600 hover:text-blue-800'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>iOS</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Android</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>Windows</Footer.Link>
              <Footer.Link href="#" className='text-base font-semibold hover:text-blue-800'>MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-teal-300 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Link to='/'>
          <Footer.Copyright className='text-black font-bold text-lg hover:text-blue-800' by="Book Ocean™" year={2024} />
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className='text-black hover:text-blue-800' href="#" icon={BsFacebook} />
            <Footer.Icon className='text-black hover:text-blue-800' href="#" icon={BsInstagram} />
            <Footer.Icon className='text-black hover:text-blue-800' href="#" icon={BsTwitter} />
            <Footer.Icon className='text-black hover:text-blue-800' href="#" icon={BsGithub} />
            <Footer.Icon className='text-black hover:text-blue-800' href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    )
}

export default PageFooter;
