import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

const Footer = () => {
  return (
        <section className="relative overflow-hidden py-10 bg-gradient-to-br from-white to-blue-50 shadow-inner">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div className="flex h-full flex-col justify-between">
                    <div className="mb-4 inline-flex items-center">
                        <Logo width="100px" />
                    </div>
                    <p className="text-sm text-gray-500">
                        &copy; Copyright 2025. All Rights Reserved by Shubhrajit Ghosh.
                    </p>
                    </div>
                </div>
                {/* Company */}
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <h3 className="mb-4 text-xs font-semibold uppercase text-gray-600">Company</h3>
                    <ul>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Features</Link></li>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Pricing</Link></li>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Affiliate Program</Link></li>
                    <li><Link className="text-gray-700 hover:text-blue-500" to="/">Press Kit</Link></li>
                    </ul>
                </div>
                {/* Support */}
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <h3 className="mb-4 text-xs font-semibold uppercase text-gray-600">Support</h3>
                    <ul>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="https://github.com/Shubhra7">Github</Link></li>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Help</Link></li>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Contact Us</Link></li>
                    <li><Link className="text-gray-700 hover:text-blue-500" to="/">Customer Support</Link></li>
                    </ul>
                </div>
                {/* Legals */}
                <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                    <h3 className="mb-4 text-xs font-semibold uppercase text-gray-600">Legals</h3>
                    <ul>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Terms &amp; Conditions</Link></li>
                    <li className="mb-2"><Link className="text-gray-700 hover:text-blue-500" to="/">Privacy Policy</Link></li>
                    <li><Link className="text-gray-700 hover:text-blue-500" to="/">Licensing</Link></li>
                    </ul>
                </div>
                </div>
            </div>
        </section>

  )
}

export default Footer
