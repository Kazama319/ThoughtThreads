import React from "react";
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const authStatus2 = useSelector((state) => state.auth.userData);
    const name=authStatus2?authStatus2.name:null;
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
        {
            name: "My Posts",
            slug: "My-post",
            active: authStatus,

        }
    ];

    return (
        <header className='py-3 shadow-lg bg-gray-800'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>

                    <ul className='flex items-center space-x-4'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <Link
                                        to={item.slug}
                                        className="px-4 py-2 text-gray-300 rounded-lg transition duration-200 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                              <div className="relative">
                              <button
                                  onClick={toggleDropdown}
                                  className="flex items-center space-x-1 text-violet-400 focus:outline-none"
                              >
                                  <span>{name}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 2c1.73 0 3.29.88 4.24 2.23a3.98 3.98 0 01-8.48 0A5.97 5.97 0 0112 16z"/>
</svg>
{isOpen==false && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 7l5 5 5-5"/>
</svg>}
{isOpen==true && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 13l5-5 5 5"/>
</svg>}



                              </button>
                              {isOpen && (
                                  <ul className="absolute right-0 mt-2 w-25 bg-gray-700 rounded-md shadow-lg py-1">
                                      <li>
                                          <LogoutBtn/>
                                      </li>
                                  </ul>
                              )}
                          </div>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
