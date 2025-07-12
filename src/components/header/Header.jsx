import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  console.log("AuthStatus: ",authStatus);
  

//  slug === URL [just named as slug]
// navItems ==> this type practice help in Production level
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
   <header className="py-4 bg-white shadow-md">
    <Container>
      <nav className="flex items-center">
        <div className="mr-4">
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>
        <ul className="flex ml-auto gap-2">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-block px-5 py-2 rounded-full text-sm font-medium text-gray-700 bg-white border border-blue-200 hover:bg-blue-500 hover:text-white transition duration-200"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>

  )
}

export default Header
