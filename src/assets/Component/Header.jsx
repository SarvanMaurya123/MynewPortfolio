import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose, MdWbSunny, MdNightlight, MdKeyboardArrowDown } from "react-icons/md"; // 
import { FaBriefcase } from "react-icons/fa";
import PropTypes from 'prop-types';
import ResumeDownload from "./Downlode";

const Header = ({ toggleDarkMode, isDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false); // State for work dropdown

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleWorkDropdown = () => {
        setIsWorkDropdownOpen(!isWorkDropdownOpen);
    };

    // Close dropdown and menu when a design link is clicked
    const handleDesignClick = () => {
        setIsWorkDropdownOpen(false); // Close the work dropdown
        setIsMenuOpen(false); // Close the menu if it's open
    };

    return (
        <header className={`transition-all duration-300 ${isDarkMode ? "bg-gray-800" : "bg-white"} py-4`}>
            <div className="flex justify-between items-center px-4 md:px-8">
                <p className={`${isDarkMode ? "text-white" : "text-black"} text-2xl`}>&#60;SM/&#62;</p>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                        {isMenuOpen ? <MdClose className="w-10 h-10" /> : <MdMenu className="w-10 h-10" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}>
                        <div className={`bg-white rounded-lg shadow-lg p-4 transition-transform transform ${isMenuOpen ? "scale-100" : "scale-0"} w-96`}>
                            <nav>
                                <ul className="flex flex-col gap-6">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={`${isDarkMode ? "text-black" : "text-black"}`}
                                            onClick={toggleMenu}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={`${isDarkMode ? "text-black" : "text-black"}`}
                                            onClick={toggleMenu}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="relative">
                                        <button
                                            onClick={toggleWorkDropdown}
                                            className={`${isDarkMode ? "text-white" : "text-black"} flex items-center text-black dark:text-black`}
                                        >
                                            <FaBriefcase className="mr-1 dark:text-black " />

                                            Work
                                            <MdKeyboardArrowDown className="ml-1" /> {/* Dropdown arrow icon */}
                                        </button>
                                        {isWorkDropdownOpen && (
                                            <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                                                <NavLink
                                                    to="/work/design1"
                                                    className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                                    onClick={handleDesignClick} // Close dropdown on click
                                                >
                                                    Design 1
                                                </NavLink>
                                                <NavLink
                                                    to="/work/design2"
                                                    className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                                    onClick={handleDesignClick} // Close dropdown on click
                                                >
                                                    Design 2
                                                </NavLink>
                                                <NavLink
                                                    to="/work/design3"
                                                    className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                                    onClick={handleDesignClick} // Close dropdown on click
                                                >
                                                    Design 3
                                                </NavLink>
                                                <NavLink
                                                    to="/work/design4"
                                                    className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                                    onClick={handleDesignClick} // Close dropdown on click
                                                >
                                                    Design 4
                                                </NavLink>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-4">
                                            <ResumeDownload />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex items-center`}>
                    <ul className="flex flex-row gap-6">
                        <li>
                            <NavLink
                                to="/"
                                className={`${isDarkMode ? "text-white" : "text-black"}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={`${isDarkMode ? "text-white" : "text-black"}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="relative">
                            <button
                                onClick={toggleWorkDropdown}
                                className={`${isDarkMode ? "text-white" : "text-black"} flex items-center`}
                            >
                                <FaBriefcase className="mr-1" /> {/* Work icon */}
                                Work
                                <MdKeyboardArrowDown className="ml-1" /> {/* Dropdown arrow icon */}
                            </button>
                            {isWorkDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                                    <NavLink
                                        to="/work/design1"
                                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                        onClick={handleDesignClick} // Close dropdown on click
                                    >
                                        Design 1
                                    </NavLink>
                                    <NavLink
                                        to="/work/design2"
                                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                        onClick={handleDesignClick} // Close dropdown on click
                                    >
                                        Design 2
                                    </NavLink>
                                    <NavLink
                                        to="/work/design3"
                                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                        onClick={handleDesignClick} // Close dropdown on click
                                    >
                                        Design 3
                                    </NavLink>
                                    <NavLink
                                        to="/work/design4"
                                        className={`block px-4 py-2 text-sm ${isDarkMode ? "text-white" : "text-black"}`}
                                        onClick={handleDesignClick} // Close dropdown on click
                                    >
                                        Design 4
                                    </NavLink>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>

                {/* Dark Mode Button */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="px-2 bg-gray-200 dark:bg-gray-600 rounded-full py-2 flex items-center gap-2"
                    >
                        {isDarkMode ? <MdWbSunny className="text-yellow-500 size-5" /> : <MdNightlight className="text-gray-700 size-5" />}
                    </button>
                    <div className="hidden md:block">
                        <ResumeDownload />
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
