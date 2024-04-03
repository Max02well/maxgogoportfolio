    import React, { useState, useEffect } from 'react';
    import { FaBars, FaTimes } from 'react-icons/fa';
    import { Link } from 'react-scroll';

    const Navbar = () => {
        const [nav, setNav] = useState(false);
        const [showMenu, setShowMenu] = useState(false);

        const links = [
            { id: 1, link: 'home' },
            { id: 2, link: 'about' },
            { id: 3, link: 'portfolio' },
            { id: 4, link: 'skills' },
            { id: 5, link: 'contact' },
        ];

        const handleMenuClick = () => {
            setShowMenu(!showMenu);
        };

        useEffect(() => {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const halfPageHeight = window.innerHeight / 2;
                setNav(scrollPosition > halfPageHeight);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
            <div>
                <div
                    className={`flex justify-between items-center w-full h-20 px-8 text-white  ${
                        nav ? 'bg-transparent' : 'bg-black'
                    }`}
                >
                    <div>
                        <Link to="home" smooth duration={500}>
                            <h1 className="text-5xl font-signature ml-2 cursor-pointer">Mx</h1>
                        </Link>
                    </div>
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
                            >
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div
                        onClick={handleMenuClick}
                        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                    >
                        {showMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
                {showMenu && (
                    <ul className="flex flex-col items-center justify-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        {links.map(({ id, link }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    export default Navbar;