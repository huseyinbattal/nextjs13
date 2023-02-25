import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <nav className='navbar navbar-light bg-info d-flex justify-content-start gap-3 p-4'>
          <Link href="/">
          Online Shop
      </Link>
      <Link href="/products">
          Products
          </Link>
      </nav>
  )
}

export default Header